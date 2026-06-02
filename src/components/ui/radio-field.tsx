"use client";

import { cn } from "@/lib/utils";

interface RadioFieldProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

/** Radio control + label row, primary-green ring/dot when selected. */
export function RadioField({ checked, onChange, label }: RadioFieldProps) {
  return (
    <label
      onClick={onChange}
      className="flex cursor-pointer select-none items-center gap-2"
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-white transition-colors",
          checked ? "border-2 border-primary" : "border-line-strong",
        )}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
      </span>
      <span className="text-[14px] leading-5 text-ink">{label}</span>
    </label>
  );
}
