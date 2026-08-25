import { useState } from "react";
import { Pencil } from "lucide-react";

type Props = {
  label?: string;
  rows?: number;
  className?: string;
};

export function TextPlaceholder({
  label = "Lägg till egen text här",
  rows = 5,
  className = "",
}: Props) {
  const [value, setValue] = useState("");

  return (
    <div className={`relative ${className}`}>
      <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <Pencil className="size-3.5 text-primary" />
        {label}
      </label>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
        aria-label={label}
        className="w-full resize-y rounded-lg border-2 border-dashed border-border bg-secondary/60 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
    </div>
  );
}
