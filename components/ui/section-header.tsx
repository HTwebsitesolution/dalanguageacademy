import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        isCentered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.22em]",
            isLight
              ? "text-[color:var(--color-gold-300)]"
              : "text-[color:var(--color-gold-600)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight sm:text-4xl lg:text-5xl",
          isLight ? "text-white" : "text-[color:var(--color-slate-900)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-8 sm:text-lg",
            isLight ? "text-white/75" : "text-[color:var(--color-slate-600)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
