import Image from "next/image";

import type { MediaImage } from "@/content/media-assets";
import { Card } from "@/components/ui/card";

type TestimonialCardProps = {
  context: string;
  role: string;
  placeholderNote?: string;
  image?: MediaImage;
};

export function TestimonialCard({
  context,
  role,
  placeholderNote,
  image,
}: TestimonialCardProps) {
  return (
    <Card className="h-full overflow-hidden p-0">
      {image ? (
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
        {placeholderNote ? (
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-slate-600)]">
            {placeholderNote}
          </p>
        ) : null}
      </div>
    </Card>
  );
}
