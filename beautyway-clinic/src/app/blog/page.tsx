import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { BlogIndex, type Post } from "@/components/BlogIndex";
import { articles, displayTitle, lede } from "@/lib/content";
import { pluralize } from "@/lib/plural";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Блог клиники",
  description:
    "Разборы процедур, подготовка и восстановление, разбор мифов косметологии. Материалы врачей BeautyWay Clinic.",
  path: "/blog",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Блог", path: "/blog" },
];

export default function BlogPage() {
  const posts: Post[] = articles.map((a) => {
    const title = displayTitle(a);
    const l = lede(a, 130);
    return { slug: a.slug, title, lede: l, keywords: `${title} ${a.description ?? ""} ${l}`.toLowerCase() };
  });

  return (
    <>
      <PageIntro
        eyebrow="Материалы"
        title="Блог клиники"
        intro={`${pluralize(posts.length, "статья", "статьи", "статей")} о процедурах, подготовке и восстановлении. Тексты перенесены с сайта клиники.`}
        crumbs={crumbs}
      />
      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <BlogIndex posts={posts} />
          <div className="mt-10">
            <MedicalNotice extra="Статьи носят справочный характер и не являются медицинской рекомендацией. План лечения назначает врач после осмотра." />
          </div>
        </Container>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
