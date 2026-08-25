import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

type Props = {
  label: string;
  hint?: string;
  className?: string;
};

export function ImagePlaceholder({ label, hint, className = "" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg border-2 border-dashed border-border bg-secondary/60 ${className}`}
    >
      {preview ? (
        <img src={preview} alt={label} className="h-full w-full object-cover" />
      ) : (
        <div className="placeholder-hatch absolute inset-0 opacity-60" aria-hidden="true" />
      )}
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
