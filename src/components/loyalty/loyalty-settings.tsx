"use client";

import { ConversionSettings } from "./conversion-settings";
import { LoyaltyHeader } from "./loyalty-header";
import { ScopeSettings } from "./scope-settings";
import { useLoyaltySettings } from "./use-loyalty-settings";
import { useState } from "react";

/**
 * Loyalty settings screen body: a single white card. When the toggle is OFF
 * only the header prompt shows; turning it ON reveals the full configuration
 * form with a sticky Cancel / Save footer.
 */
export function LoyaltySettings() {
  const [enabled, setEnabled] = useState(false);
  const { state, set, reset } = useLoyaltySettings();

  return (
    <section className="flex-1">
      <div className="overflow-hidden rounded-lg bg-white shadow-card">
        <div className="p-6">
          <LoyaltyHeader enabled={enabled} onToggle={setEnabled} />
        </div>

        {enabled && (
          <>
            <div className="h-px bg-[rgba(210,205,219,0.5)]" />
            <div className="flex flex-col gap-6 p-6">
              <ConversionSettings state={state} set={set} />
              <ScopeSettings state={state} set={set} />
            </div>

            {/* Footer padding 8/16/16 and fixed button widths match Figma exactly. */}
            <div className="flex justify-end gap-1 border-t border-line px-4 pb-4 pt-2">
              <button
                onClick={reset}
                className="flex h-9 w-[137px] items-center justify-center rounded-lg border border-primary text-[15px] font-semibold leading-5 text-primary transition-colors hover:bg-primary-surface"
              >
                Hủy
              </button>
              <button className="flex h-9 w-[123px] items-center justify-center rounded-lg bg-primary text-[15px] font-medium leading-5 text-[#ECFFF8] transition-colors hover:bg-primary-hover">
                Lưu
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
