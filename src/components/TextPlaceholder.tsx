import { useState } from "react";
import { Pencil } from "lucide-react";

type Props = {
  label?: string;
  rows?: number;
  className?: string;
  /** Exempeltext (inspiration) som förifylls och tydligt märks som exempel */
  exampleText?: string;
};

export function TextPlaceholder({
  label = "Lägg till egen text här",
  rows = 5,
  className = "",
  exampleText,
}: Props) {
  const [value, setValue] = useState(exampleText ?? "");
  const isExample = !!exampleText && value === exampleText;

  return (
    <div className={`relative ${className}`}>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <Pencil className="size-3.5 text-primary" />
          {label}
        </label>
        {isExample && (
          <span className="rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-background">
            Exempel – byt ut
          </span>
        )}
      </div>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
        aria-label={label}
        className={`w-full resize-y rounded-lg border-2 border-dashed p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none ${
          isExample ? "border-primary/40 bg-secondary/40 italic" : "border-border bg-secondary/60"
        }`}
      />
      {isExample && (
        <p className="mt-2 text-xs text-muted-foreground">
          Inspiration, ej riktig text – skriv över med er egen.
        </p>
      )}
    </div>
  );
}
