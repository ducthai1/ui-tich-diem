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
          "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border transition-colors",
          checked ? "border-[5px] border-primary bg-white" : "border-line-strong bg-white",
        )}
      />
      <span className="text-[14px] leading-5 text-ink">{label}</span>
    </label>
  );
}
