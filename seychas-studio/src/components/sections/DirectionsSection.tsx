"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { directions } from "@/lib/services";
import { directionImages } from "@/lib/media";
import { directionIcons } from "@/components/ui/Icons";
import { ArrowIcon } from "@/components/ui/Button";

export function DirectionsSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Направления</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-xl text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Что вам нужно сейчас?
          </h2>
        </Reveal>

        <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {directions.map((d, i) => {
            const Icon = directionIcons[d.slug as keyof typeof directionIcons];
            const isActive = active === d.slug;
            const image = directionImages[d.slug];
            return (
              <Reveal key={d.slug} delay={i * 0.07} className="w-[78vw] shrink-0 snap-start sm:w-auto">
                <Link
                  href={`/services/${d.slug}`}
                  onMouseEnter={() => setActive(d.slug)}
                  onMouseLeave={() => setActive(null)}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-border"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent" />

                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <Icon className="h-7 w-7 text-background" />
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-background/35 text-background transition-all duration-300 group-hover:border-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold uppercase tracking-tight text-background">
                        {d.title}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-2 space-y-0.5 text-sm text-background/85">
                          {d.items.slice(0, 3).map((item) => (
                            <li key={item.name}>{item.name}</li>
                          ))}
                        </ul>
                      </motion.div>
                      <p className={`mt-1.5 text-sm text-background/80 ${isActive ? "sm:hidden" : ""}`}>
                        {d.short}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
