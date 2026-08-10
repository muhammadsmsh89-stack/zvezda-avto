"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { SceneFrame } from "@/components/media/SceneFrame";
import type { MediaAsset } from "@/data/media";
import { IconChevron } from "@/components/icons";

export function Categories() {
  const [active, setActive] = useState(categories[0].id);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const activeCategory = categories.find((c) => c.id === active) ?? categories[0];
  const activeMedia: MediaAsset = { type: "blueprint", illustrationId: activeCategory.illustrationId };

  return (
    <section id="categories" className="bg-paper py-20 sm:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading index="§02" eyebrow="Направления" title="Что мы делаем" className="mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            {categories.map((category, i) => {
              const isActive = active === category.id;
              const isOpen = mobileOpen === category.id;
              const media: MediaAsset = { type: "blueprint", illustrationId: category.illustrationId };
              return (
                <Reveal key={category.id} delay={i * 0.05} className="border-b border-border first:border-t">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(category.id)}
                    onFocus={() => setActive(category.id)}
                    onClick={() => setMobileOpen((v) => (v === category.id ? null : category.id))}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-7 text-left transition-colors hover:bg-stone/60 sm:gap-8 sm:-mx-4 sm:px-4"
                  >
                    <span className="flex items-baseline gap-5 sm:gap-8">
                      <span
                        className={clsx(
                          "font-mono-tag shrink-0 text-lg transition-colors sm:text-xl",
                          isActive ? "text-accent" : "text-muted",
                        )}
                      >
                        {category.index}
                      </span>
                      <span
                        className={clsx(
                          "font-display text-[clamp(1.5rem,3.2vw,2.5rem)] font-medium leading-tight transition-colors",
                          isActive ? "text-ink" : "text-ink/55",
                        )}
                      >
                        {category.name}
                      </span>
                    </span>
                    <IconChevron
                      className={clsx(
                        "h-4 w-4 shrink-0 text-muted transition-transform lg:hidden",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <p className="pb-4 max-w-md text-sm leading-relaxed text-muted">{category.description}</p>
                        <div className="pb-6">
                          <SceneFrame media={media} label={category.name} sheet={`0${category.index}/06`} />
                        </div>
                        <WhatsAppLink
                          context={category.whatsappContext}
                          className="mb-6 text-sm text-ink underline decoration-border underline-offset-4"
                        >
                          Спросить про {category.name.toLowerCase()}
                        </WhatsAppLink>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p
                    className={clsx(
                      "hidden max-w-md pb-6 text-sm leading-relaxed text-muted transition-opacity lg:block",
                      isActive ? "opacity-100" : "pointer-events-none h-0 overflow-hidden opacity-0",
                    )}
                  >
                    {category.description}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-auto max-w-sm"
                >
                  <SceneFrame media={activeMedia} label={activeCategory.name} sheet={`0${activeCategory.index}/06`} />
                  <WhatsAppLink
                    context={activeCategory.whatsappContext}
                    className="mt-5 text-sm text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    Спросить про {activeCategory.name.toLowerCase()}
                  </WhatsAppLink>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
