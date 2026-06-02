"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxFieldProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}

/** Square checkbox + label row, primary-green fill when checked. */
export function CheckboxField({ checked, onChange, label }: CheckboxFieldProps) {
  return (
    <label
      onClick={() => onChange(!checked)}
      className="flex cursor-pointer select-none items-center gap-2"
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
          checked
            ? "border-primary bg-primary text-white"
            : "border-line-strong bg-white text-transparent",
        )}
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className="text-[14px] leading-5 text-ink">{label}</span>
    </label>
  );
}
