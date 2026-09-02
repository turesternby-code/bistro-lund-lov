type Props = {
  children: string;
  className?: string;
};

export function ExampleTextCard({ children, className = "" }: Props) {
  const paragraphs = children.split(/\n\n/).filter(Boolean);

  return (
    <div className={`rounded-xl border border-border bg-card p-6 shadow-sm ${className}`}>
      <div className="flex justify-end">
        <span className="rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-background">
          Exempel – byt ut
        </span>
      </div>
      <div className="mt-4 space-y-4 leading-relaxed text-foreground">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
