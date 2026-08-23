export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Абсолютных путей в разметке быть не должно — только через withBase. */
export function withBase(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : "/" + path}`;
}
