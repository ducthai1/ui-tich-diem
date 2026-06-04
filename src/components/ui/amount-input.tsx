"use client";

import { cn } from "@/lib/utils";

interface AmountInputProps {
  value: string;
  onChange: (next: string) => void;
  unit: string;
  /** Width utility for the whole input + unit cluster. */
  className?: string;
}

/**
 * Numeric field followed by a solid green unit button (e.g. "0" + "VND"),
 * matching the Figma conversion-rate controls.
 */
export function AmountInput({
  value,
  onChange,
  unit,
  className,
}: AmountInputProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <input
        inputMode="numeric"
        value={value}
        placeholder="0"
        onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, ""))}
        className="h-10 w-full min-w-0 flex-1 rounded-card border border-line-strong bg-white px-3 text-[16px] font-medium leading-6 text-ink-strong outline-none placeholder:font-normal placeholder:text-ink-subtle focus:border-primary"
      />
      <span className="flex h-10 shrink-0 items-center justify-center rounded-card bg-primary-accent px-2 text-[16px] font-medium leading-6 text-[#F3F3F4]">
        {unit}
      </span>
    </div>
  );
}
