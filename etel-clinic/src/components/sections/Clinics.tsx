import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { clinics, site } from "@/lib/site";

export function Clinics() {
  const [big, ...small] = clinics;

  return (
    <section className="bg-shell py-24 sm:py-32">
      <Container wide>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeUp>
            <p className="eyebrow">Клиники</p>
            <h2 className="font-display mt-4 max-w-[28rem] text-[2.5rem] leading-[1.02] text-ink text-balance sm:text-[3.25rem]">
              Три клиники, один стандарт приёма
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="flex items-center gap-2 text-[0.9375rem] text-ink-mute">
              <Clock size={16} strokeWidth={1.75} />
              {site.hours.long} · {site.hours.note}
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <FadeUp delay={0.1} className="lg:col-span-2 lg:row-span-2">
            <ClinicCard clinic={big} tall />
          </FadeUp>
          {small.map((c, i) => (
            <FadeUp key={c.slug} delay={0.16 + i * 0.08}>
              <ClinicCard clinic={c} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClinicCard({ clinic, tall = false }: { clinic: (typeof clinics)[number]; tall?: boolean }) {
  return (
    <Link
      href={`/clinics/${clinic.slug}/`}
      className={`group relative block h-full overflow-hidden rounded-[1.75rem] bg-graphite ${tall ? "aspect-[4/5] sm:aspect-auto sm:h-full sm:min-h-[28rem]" : "aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[13rem]"}`}
    >
      <Image
        src={withBase(clinic.photo)}
        alt={clinic.name}
        fill
        sizes={tall ? "(min-width: 1024px) 56vw, 92vw" : "(min-width: 1024px) 28vw, 92vw"}
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3 className="font-display text-[1.375rem] text-shell sm:text-[1.625rem]">{clinic.name}</h3>
        <p className="mt-1.5 text-[0.875rem] text-shell/60">{clinic.district}</p>
        <p className="text-[0.875rem] text-shell/60">{clinic.addressShort}</p>
        <span className="mt-4 inline-flex translate-y-2 items-center gap-2 text-[0.875rem] font-medium text-accent-lift opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Открыть клинику
          <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
