import { Card } from "@/components/ui/card";

type TestimonialCardProps = {
  context: string;
  role: string;
  placeholderNote: string;
};

export function TestimonialCard({
  context,
  role,
  placeholderNote,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-gold-600)]">
        Future testimonial slot
      </p>
      <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-slate-900)]">
        {context}
      </h3>
      <p className="mt-2 text-sm font-medium text-[color:var(--color-brand-700)]">
        {role}
      </p>
      <p className="mt-4 text-sm leading-7 text-[color:var(--color-slate-600)]">
        {placeholderNote}
      </p>
    </Card>
  );
}
