import { Hero } from "@/components/sections/Hero";
import { ReputationStrip } from "@/components/sections/ReputationStrip";
import { Capabilities } from "@/components/sections/Capabilities";
import { ProjectsIntro } from "@/components/sections/ProjectsIntro";
import { ProjectFeature } from "@/components/sections/ProjectFeature";
import { FeatureSpotlight } from "@/components/sections/FeatureSpotlight";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contacts } from "@/components/sections/Contacts";
import { projects } from "@/data/projects";
import { protectionFeatureMedia, bodyworkFeatureMedia, tuningFeatureMedia } from "@/data/media";

const [bmw, camry] = projects;

export default function Home() {
  return (
    <>
      <Hero />
      <ReputationStrip />
      <Capabilities />

      <ProjectsIntro />
      <ProjectFeature project={bmw} />

      <FeatureSpotlight
        id="protection"
        index="02"
        eyebrow="Protection / PPF"
        title="Защита кузова"
        body={[
          "Сохранить внешний вид автомобиля без изменения его характера.",
          "Клиенты чаще всего описывают результат сатиновой плёнки одинаково — «как будто новая машина», не изменившая свой цвет и линии, а получившая защиту.",
        ]}
        detail={["Антигравийная плёнка", "Полная оклейка кузова", "Оклейка зон риска", "Антихром"]}
        media={protectionFeatureMedia}
        whatsappContext="защиту кузова плёнкой"
        reversed
      />

      <ProjectFeature project={camry} reversed />

      <FeatureSpotlight
        id="bodywork"
        index="03"
        eyebrow="Bodywork"
        title="Кузовной ремонт и восстановление"
        body={[
          "Покраска и рихтовка — точность геометрии панели и совпадение цвета, а не косметическая маскировка повреждения.",
          "Для локальных повреждений — удаление вмятин без покраски, когда это позволяет характер повреждения.",
        ]}
        detail={["Покраска", "Рихтовка", "Ремонт бамперов", "Удаление вмятин без покраски (PDR)"]}
        media={bodyworkFeatureMedia}
        whatsappContext="кузовной ремонт"
      />

      <FeatureSpotlight
        id="tuning"
        index="04"
        eyebrow="Tuning / Individualization"
        title="Тюнинг и индивидуализация"
        body={[
          "Изменение характера автомобиля через детали — обвес, карбоновые элементы салона, рестайлинг под задачу конкретного клиента.",
          "В отзывах это чаще всего комплексный проект, а не установка одной детали.",
        ]}
        detail={["Обвес", "Карбоновые элементы салона", "Рестайлинг", "Тюнинг мототехники"]}
        media={tuningFeatureMedia}
        whatsappContext="проект тюнинга"
        reversed
      />

      <Process />
      <About />
      <Reviews />
      <Faq />
      <FinalCta />
      <Contacts />
    </>
  );
}
