import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "accent" | "muted";
};

const toneClasses: Record<NonNullable<CardProps["tone"]>, string> = {
  default:
    "border border-[color:var(--color-border)] bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)]",
  accent:
    "border border-[color:var(--color-brand-200)] bg-[color:var(--color-brand-50)] shadow-[0_20px_60px_rgba(24,42,91,0.08)]",
  muted:
    "border border-white/10 bg-[color:var(--color-slate-900)] text-white shadow-[0_20px_60px_rgba(2,6,23,0.35)]",
};

export function Card({
  className,
  tone = "default",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 transition-transform duration-300 md:p-7",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
