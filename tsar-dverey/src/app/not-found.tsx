import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-[15px] uppercase tracking-[0.14em] text-muted">Страница не найдена</p>
      <h1 className="text-balance mt-4 text-[32px] sm:text-[40px]">Такой страницы больше нет</h1>
      <p className="mt-4 max-w-md text-[16px] text-muted">
        Возможно, ссылка устарела. Вернитесь на главную или откройте каталог.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-[3px] bg-foreground px-6 py-3.5 text-[15px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          На главную
        </Link>
        <Link
          href="/catalog"
          className="inline-flex items-center justify-center rounded-[3px] border border-border-strong px-6 py-3.5 text-[15px] text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Открыть каталог
        </Link>
      </div>
    </div>
  );
}
