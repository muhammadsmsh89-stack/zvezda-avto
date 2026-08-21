import { IconShield } from "./Icons";
import { MEDICAL_DISCLAIMER } from "@/lib/site";

export function MedicalNotice({ extra }: { extra?: string }) {
  return (
    <aside className="flex items-start gap-3 rounded-[10px] border border-line bg-plum-tint p-4">
      <IconShield className="mt-0.5 h-5 w-5 shrink-0 text-plum-deep" />
      <p className="text-[0.875rem] leading-relaxed text-graphite">
        <strong className="font-semibold">{MEDICAL_DISCLAIMER}</strong>{" "}
        {extra ??
          "Информация на странице носит справочный характер, не является медицинской рекомендацией и не заменяет очный осмотр врача."}
      </p>
    </aside>
  );
}
