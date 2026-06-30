export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-[color:var(--text-strong)] sm:text-5xl">{title}</h2>
      <p className="text-lg leading-8 text-[color:var(--text-soft)]">{description}</p>
    </div>
  );
}
