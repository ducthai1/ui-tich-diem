"use client";

import { Check, ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LabeledSelectProps {
  label: string;
  placeholder: string;
  /** All selectable options. */
  options: string[];
  /** Currently selected values, rendered as chips. */
  values: string[];
  onChange: (next: string[]) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Multi-select dropdown with a floating label. Closed: shows blue value chips
 * (or placeholder) + chevron. Open: reveals a checkable option list; selecting
 * appends a chip, the chip "X" or re-selecting removes it. Closes on outside click.
 */
export function LabeledSelect({
  label,
  placeholder,
  options,
  values,
  onChange,
  disabled,
  className,
}: LabeledSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const toggleValue = (value: string) =>
    onChange(
      values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value],
    );

  const hasValues = values.length > 0;

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <div
        onClick={() => !disabled && setOpen((o) => !o)}
        className={cn(
          // Fixed min-height matches the "with chips" state so toggling
          // selections never shifts surrounding layout.
          "flex min-h-[80px] cursor-pointer items-start gap-2 rounded-card border bg-white px-3 py-2.5",
          open ? "border-primary" : "border-line",
          disabled && "cursor-not-allowed bg-[#F3F3F4]",
        )}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <span className="text-[14px] leading-5 text-ink-subtle">{label}</span>
          {/* Second row keeps a fixed height (= one chip) in both states so
              selecting/clearing options never changes the field height. */}
          {hasValues ? (
            <div className="flex min-h-[32px] flex-wrap items-center gap-2">
              {values.map((v) => (
                <span
                  key={v}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-[14px] font-medium leading-5 text-white",
                    disabled ? "bg-line-strong" : "bg-[#1376BE]",
                  )}
                >
                  {v}
                  {!disabled && (
                    <X
                      className="h-4 w-4 cursor-pointer opacity-90 hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleValue(v);
                      }}
                    />
                  )}
                </span>
              ))}
            </div>
          ) : (
            <span className="flex min-h-[32px] items-center truncate text-[15px] font-medium leading-5 text-ink-subtle">
              {placeholder}
            </span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 text-ink-muted transition-transform",
            open && "rotate-180",
          )}
        />
      </div>

      {open && (
        <ul className="absolute left-0 right-0 top-[calc(100%+4px)] z-20 max-h-60 overflow-auto rounded-lg border border-line bg-white py-1 shadow-dropdown">
          {options.map((option) => {
            const selected = values.includes(option);
            return (
              <li
                key={option}
                onClick={() => toggleValue(option)}
                className={cn(
                  "flex cursor-pointer items-center justify-between px-3 py-2 text-[14px] leading-5 hover:bg-canvas",
                  selected ? "font-medium text-primary" : "text-ink",
                )}
              >
                {option}
                {selected && <Check className="h-4 w-4 text-primary" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
