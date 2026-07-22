import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { certificates, insurancePartners } from "@/lib/content";

export function TrustProofSection() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Документы и партнёры" title="Сертификаты и страховые компании" />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Сертификаты
            </h3>
            <Stagger className="mt-5 grid grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <StaggerItem key={cert.file}>
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-white">
                    <Image
                      src={`/images/certificates/${cert.file}`}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      sizes="200px"
                    />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Работаем со страховыми компаниями
            </h3>
            <Stagger className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-4">
              {insurancePartners.map((partner) => (
                <StaggerItem key={partner.file}>
                  <div className="flex aspect-square items-center justify-center rounded-xl border border-border bg-white p-3">
                    <div className="relative h-full w-full">
                      <Image
                        src={`/images/insurance/${partner.file}`}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="120px"
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Принимаем ремонт по ОСАГО и страховому полису от партнёрских страховых компаний.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
