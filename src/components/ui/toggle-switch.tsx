"use client";

import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (next: boolean) => void;
}

const KNOB = (
  <span className="h-5 w-5 shrink-0 rounded-full bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]" />
);

/**
 * Pill toggle with inline ON/OFF label, matching the Figma loyalty toggle:
 * 64px track, 20px knob, green (#119C72) when on, grey (#D9D9D9) when off.
 */
export function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "flex h-7 w-16 items-center justify-between gap-2 rounded-full px-1 transition-colors",
        checked ? "bg-primary-accent pl-2.5" : "border border-line bg-[#F0F0F4] pr-2.5",
      )}
    >
      {checked && (
        <span className="select-none text-[14px] font-medium leading-5 text-white">
          ON
        </span>
      )}
      {KNOB}
      {!checked && (
        <span className="select-none text-[14px] font-medium leading-5 text-ink-subtle">
          OFF
        </span>
      )}
    </button>
  );
}
