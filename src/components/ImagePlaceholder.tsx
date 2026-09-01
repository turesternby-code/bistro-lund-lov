import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

type Props = {
  label: string;
  hint?: string;
  className?: string;
  /** Exempelbild (inspiration) som visas tills egen bild laddas upp */
  exampleSrc?: string;
  exampleAlt?: string;
  eager?: boolean;
};

export function ImagePlaceholder({
  label,
  hint,
  className = "",
  exampleSrc,
  exampleAlt,
  eager = false,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const showExample = !preview && !!exampleSrc;

  return (
    <div
      className={`group relative overflow-hidden rounded-lg border-2 border-dashed border-border bg-secondary/60 ${className}`}
    >
      {preview ? (
        <img src={preview} alt={label} className="h-full w-full object-cover" />
      ) : showExample ? (
        <img
          src={exampleSrc}
          alt={exampleAlt ?? "Exempelbild – inspiration, ej riktigt foto"}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="placeholder-hatch absolute inset-0 opacity-60" aria-hidden="true" />
      )}

      {showExample && (
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-background shadow-sm">
          Exempel – byt ut
        </span>
      )}

      {showExample ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="absolute inset-0 flex items-end justify-center bg-foreground/0 p-4 transition-colors hover:bg-foreground/35"
        >
          <span className="flex items-center gap-2 rounded-full bg-card/95 px-4 py-2 text-xs font-semibold text-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            <ImagePlus className="size-4 text-primary" />
            {hint ?? "Ladda upp er egen bild"}
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center transition-colors hover:bg-secondary/40"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-card text-primary shadow-sm">
            <ImagePlus className="size-5" />
          </span>
          <span className="font-display text-base font-semibold text-foreground">{label}</span>
          <span className="text-xs text-muted-foreground">
            {hint ?? "Klicka för att lägga till er egen bild"}
          </span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setPreview(URL.createObjectURL(file));
        }}
      />
    </div>
  );
}
