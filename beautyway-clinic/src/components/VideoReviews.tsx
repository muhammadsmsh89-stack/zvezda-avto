"use client";

import { useState } from "react";
import Link from "next/link";
import { Media } from "./ui/Media";
import { IconPlay } from "./ui/Icons";
import { withBase } from "@/lib/basePath";

export type VideoReview = {
  id: string;
  poster: string;
  title: string;
  doctor: string | null;
  doctorName: string | null;
  video: string | null;
};

/**
 * Видеоотзывы: сначала только постер, файл подгружается ТОЛЬКО после нажатия.
 * Ничего не автоплеит, LCP не задевает.
 */
export function VideoReviews({ items, limit }: { items: VideoReview[]; limit?: number }) {
  const [playing, setPlaying] = useState<string | null>(null);
  const list = limit ? items.slice(0, limit) : items;

  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {list.map((v) => {
        const isPlaying = playing === v.id;
        return (
          <li
            key={v.id}
            className="overflow-hidden rounded-[10px] border border-line bg-porcelain"
          >
            <div className="relative" style={{ aspectRatio: "300 / 530" }}>
              {isPlaying && v.video ? (
                <video
                  src={withBase(`/video/${v.video}`)}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster={withBase(`/media/${v.poster}-600.webp`)}
                  className="h-full w-full bg-ink object-cover"
                >
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              ) : (
                <>
                  <Media
                    name={v.poster}
                    widths={[300, 600]}
                    ratio="300 / 530"
                    alt={`Видеоотзыв пациента: ${v.title}`}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="absolute inset-0 h-full w-full"
                  />
                  {v.video ? (
                    <button
                      type="button"
                      onClick={() => setPlaying(v.id)}
                      className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/70 via-transparent to-transparent p-3 transition-colors hover:from-ink/85 cursor-pointer"
                    >
                      <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-porcelain/95 px-4 text-[0.8125rem] font-medium text-plum-deep">
                        <IconPlay className="h-4 w-4" />
                        Смотреть
                      </span>
                    </button>
                  ) : (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-3 text-[0.75rem] leading-snug text-milk">
                      Видео доступно на официальном сайте клиники
                    </span>
                  )}
                </>
              )}
            </div>
            <div className="p-3">
              <p className="text-[0.8125rem] font-medium leading-snug text-graphite">{v.title}</p>
              {v.doctor && v.doctorName && (
                <Link
                  href={`/vrachi/${v.doctor}`}
                  className="mt-1.5 inline-flex min-h-[44px] items-center text-[0.75rem] leading-snug text-plum hover:text-plum-deep"
                >
                  {v.doctorName}
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
