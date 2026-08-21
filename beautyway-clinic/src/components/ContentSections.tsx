import { IconCheck } from "./ui/Icons";

/**
 * Рендер перенесённых разделов. Короткие однострочные абзацы подряд
 * показываем списком — на исходном сайте это были <li>, и в вёрстке
 * они должны читаться так же.
 */
export function ContentSections({
  sections,
  skip = [],
  only,
  skipIntro = false,
}: {
  sections: { heading: string | null; body: string[] }[];
  skip?: string[];
  only?: string[];
  /** Не выводить вводный блок без заголовка — он уже показан в шапке страницы. */
  skipIntro?: boolean;
}) {
  const norm = (s: string) => s.toLowerCase().replace(/[^а-яёa-z]/gi, "");
  const skipSet = skip.map(norm);
  const onlySet = only?.map(norm);

  const visible = sections.filter((s) => {
    const h = norm(s.heading ?? "");
    if (onlySet) return s.heading ? onlySet.some((o) => h.includes(o)) : false;
    if (!s.heading) return !skipIntro;
    return !skipSet.some((sk) => h.includes(sk));
  });

  if (!visible.length) return null;

  return (
    <div className="space-y-9">
      {visible.map((s, i) => (
        <section key={`${i}-${s.heading ?? "intro"}`}>
          {s.heading && (
            <h2 className="mb-3.5 font-display text-[1.375rem] leading-snug text-graphite sm:text-[1.625rem]">
              {s.heading}
            </h2>
          )}
          <Body lines={s.body} />
        </section>
      ))}
    </div>
  );
}

function Body({ lines }: { lines: string[] }) {
  const isListy = lines.length > 2 && lines.filter((l) => l.length < 190).length / lines.length > 0.7;

  if (isListy) {
    return (
      <ul className="space-y-2.5">
        {lines.map((l, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[1rem] leading-relaxed text-graphite-soft">
            <IconCheck className="mt-1 h-[17px] w-[17px] shrink-0 text-plum" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="space-y-3.5">
      {lines.map((l, i) => (
        <p key={i} className="text-[1rem] leading-relaxed text-graphite-soft">
          {l}
        </p>
      ))}
    </div>
  );
}
