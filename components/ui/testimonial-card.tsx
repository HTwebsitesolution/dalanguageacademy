import Image from "next/image";

import type { MediaImage, TestimonialVideo } from "@/content/media-assets";
import { Card } from "@/components/ui/card";

export type TestimonialCardProps = {
  context: string;
  role: string;
  description?: string;
  image?: MediaImage;
  video?: TestimonialVideo;
};

export function TestimonialCard({
  context,
  role,
  description,
  image,
  video,
}: TestimonialCardProps) {
  return (
    <Card className="h-full overflow-hidden p-0">
      {video ? (
        <div className="relative aspect-[16/10] bg-[color:var(--color-slate-900)]">
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={video.label}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      ) : null}

      {!video && image ? (
        <div className="relative aspect-[16/10] bg-[color:var(--color-slate-50)]">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={500}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}

      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-[color:var(--color-slate-900)]">{context}</h3>
        <p className="mt-2 text-sm font-medium text-[color:var(--color-brand-700)]">{role}</p>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-slate-600)]">{description}</p>
        ) : null}
      </div>
    </Card>
  );
}
