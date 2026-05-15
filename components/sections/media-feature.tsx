import Image from "next/image";

import type { MediaFeatureContent } from "@/content/media-assets";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type MediaFeatureProps = MediaFeatureContent;

function MediaImagePanel({
  image,
  images,
  priority = false,
}: {
  image?: MediaFeatureContent["image"];
  images?: MediaFeatureContent["images"];
  priority?: boolean;
}) {
  if (images && images.length > 0) {
    return (
      <div
        className={cn(
          "grid gap-3",
          images.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3",
        )}
      >
        {images.map((item, index) => (
          <div
            key={item.src}
            className={cn(
              "relative overflow-hidden rounded-[1.2rem] bg-[color:var(--color-slate-50)]",
              images.length === 1 ? "min-h-72" : "min-h-48 sm:min-h-56",
              index === 0 && images.length === 3 ? "sm:col-span-3 sm:min-h-72" : "",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={900}
              priority={priority && index === 0}
              sizes={
                images.length === 1
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : index === 0
                    ? "(max-width: 640px) 100vw, 66vw"
                    : "(max-width: 640px) 50vw, 33vw"
              }
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  if (!image) {
    return null;
  }

  return (
    <div className="relative min-h-72 overflow-hidden rounded-[1.2rem] bg-[color:var(--color-slate-50)]">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={900}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="h-full min-h-72 w-full object-cover"
      />
    </div>
  );
}

export function MediaFeature({
  eyebrow,
  title,
  description,
  note,
  image,
  images,
  priority = false,
  reverse = false,
}: MediaFeatureProps) {
  const hasMedia = Boolean(image || (images && images.length > 0));

  if (!hasMedia) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div
          className={cn(
            "grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center",
            reverse && "lg:[direction:rtl]",
          )}
        >
          <Card
            className={cn(
              "h-full border-[color:var(--color-brand-200)] lg:[direction:ltr]",
              reverse && "lg:[direction:ltr]",
            )}
          >
            <SectionHeader eyebrow={eyebrow} title={title} description={description} />
            {note ? (
              <p className="mt-6 text-sm leading-7 text-[color:var(--color-slate-600)]">{note}</p>
            ) : null}
          </Card>

          <Card className={cn("h-full overflow-hidden p-3 sm:p-4 lg:[direction:ltr]")}>
            <MediaImagePanel image={image} images={images} priority={priority} />
          </Card>
        </div>
      </Container>
    </section>
  );
}
