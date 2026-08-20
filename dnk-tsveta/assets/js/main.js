(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Header scroll state ---------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScrollHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScrollHeader();
    window.addEventListener("scroll", onScrollHeader, { passive: true });
  }

  /* ---------------- Mobile drawer ---------------- */
  var menuToggle = document.querySelector(".menu-toggle");
  var drawer = document.querySelector(".mobile-drawer");
  var drawerClose = document.querySelector(".drawer-close");
  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("is-open");
    document.body.classList.add("no-scroll");
    menuToggle && menuToggle.setAttribute("aria-expanded", "true");
    var first = drawer.querySelector("a");
    first && first.focus();
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    menuToggle && menuToggle.setAttribute("aria-expanded", "false");
  }
  menuToggle && menuToggle.addEventListener("click", openDrawer);
  drawerClose && drawerClose.addEventListener("click", closeDrawer);
  drawer &&
    drawer.addEventListener("click", function (e) {
      if (e.target === drawer) closeDrawer();
    });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  /* ---------------- Sticky mobile booking bar (hide on scroll down) ---------------- */
  var bookBar = document.querySelector(".mobile-book-bar");
  if (bookBar) {
    var lastY = window.scrollY;
    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y > lastY && y > 200) {
            bookBar.classList.add("is-hidden");
          } else {
            bookBar.classList.remove("is-hidden");
          }
          lastY = y;
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && !reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------------- Branch context (persisted) ---------------- */
  var BRANCH_KEY = "dnk_branch";
  function getBranch() {
    try {
      return localStorage.getItem(BRANCH_KEY) || "chertanovo";
    } catch (e) {
      return "chertanovo";
    }
  }
  function setBranch(id) {
    try {
      localStorage.setItem(BRANCH_KEY, id);
    } catch (e) {}
    document.dispatchEvent(new CustomEvent("dnk:branch-changed", { detail: { branch: id } }));
    applyBranchLinks(id);
  }

  function applyBranchLinks(id) {
    var data = window.DNK && window.DNK.BRANCHES[id];
    if (!data) return;
    document.querySelectorAll("[data-branch-toggle] button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.branch === id);
    });
    document.querySelectorAll("[data-branch-detail]").forEach(function (el) {
      el.innerHTML =
        "<strong>" +
        data.fullName +
        "</strong><br>" +
        data.addressFull +
        " · " +
        data.metro +
        "<br>" +
        data.hours;
    });
    document.querySelectorAll("[data-branch-book]").forEach(function (el) {
      el.href = window.DNK.BOOKING_URL;
    });
    document.querySelectorAll("[data-branch-wa]").forEach(function (el) {
      var msg = el.dataset.waMessage || "Здравствуйте! Хочу записаться в DNK Цвета.";
      el.href = window.DNK.wa(id, msg);
    });
    document.querySelectorAll("[data-branch-phone]").forEach(function (el) {
      el.href = data.phoneHref;
      el.textContent = data.phoneDisplay;
    });
    document.querySelectorAll("[data-mobile-book-bar]").forEach(function (el) {
      el.href = window.DNK.BOOKING_URL;
    });
  }

  document.querySelectorAll("[data-branch-toggle] button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setBranch(btn.dataset.branch);
    });
  });

  if (window.DNK) {
    applyBranchLinks(getBranch());
  }

  /* ---------------- Generic accordion ---------------- */
  document.querySelectorAll(".accordion-item").forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    trigger &&
      trigger.addEventListener("click", function () {
        var wasOpen = item.classList.contains("is-open");
        item
          .closest("[data-accordion-group]") &&
          item
            .closest("[data-accordion-group]")
            .querySelectorAll(".accordion-item")
            .forEach(function (i) {
              i.classList.remove("is-open");
            });
        item.classList.toggle("is-open", !wasOpen);
      });
  });

  /* ---------------- Price page: search + filter ---------------- */
  var priceRoot = document.querySelector("[data-price-app]");
  if (priceRoot) {
    var searchInput = priceRoot.querySelector("[data-price-search]");
    var branchChips = priceRoot.querySelectorAll("[data-price-branch]");
    var rows = priceRoot.querySelectorAll(".price-row");
    var groups = priceRoot.querySelectorAll(".price-group");
    var emptyState = priceRoot.querySelector(".price-empty");
    var activeBranch = "all";

    function refresh() {
      var q = (searchInput && searchInput.value.trim().toLowerCase()) || "";
      var anyVisible = false;
      groups.forEach(function (group) {
        var groupHasVisible = false;
        group.querySelectorAll(".price-row").forEach(function (row) {
          var text = row.dataset.name.toLowerCase();
          var branch = row.dataset.branch;
          var matchesText = !q || text.indexOf(q) !== -1;
          var matchesBranch = activeBranch === "all" || branch === activeBranch || branch === "all";
          var visible = matchesText && matchesBranch;
          row.classList.toggle("is-hidden", !visible);
          if (visible) groupHasVisible = true;
        });
        group.style.display = groupHasVisible ? "" : "none";
        if (groupHasVisible) anyVisible = true;
      });
      emptyState && emptyState.classList.toggle("is-visible", !anyVisible);
    }

    searchInput && searchInput.addEventListener("input", refresh);
    branchChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        branchChips.forEach(function (c) {
          c.classList.remove("is-active");
        });
        chip.classList.add("is-active");
        activeBranch = chip.dataset.priceBranch;
        refresh();
      });
    });
    refresh();
  }

  /* ---------------- Contextual WhatsApp link builder (data-wa-context) ---------------- */
  document.querySelectorAll("[data-wa-context]").forEach(function (el) {
    var branch = el.dataset.waBranch || getBranch();
    var msg = el.dataset.waMessage || "Здравствуйте! Хочу записаться в DNK Цвета.";
    el.href = window.DNK ? window.DNK.wa(branch, msg) : "#";
  });
})();
