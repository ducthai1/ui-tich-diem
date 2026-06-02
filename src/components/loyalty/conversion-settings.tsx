"use client";

import { AmountInput } from "@/components/ui/amount-input";
import { CheckboxField } from "@/components/ui/checkbox-field";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import type { LoyaltyState } from "./use-loyalty-settings";

const EXCLUSIONS = [
  { key: "excludeDiscountedProducts", label: "Không tích điểm cho sản phẩm giảm giá" },
  { key: "excludeDiscountedInvoices", label: "Không tích điểm cho hóa đơn giảm giá" },
  {
    key: "excludePointPaidInvoices",
    label: "Không tích điểm cho hóa đơn thanh toán bằng điểm thưởng",
  },
] as const;

interface Props {
  state: LoyaltyState;
  set: <K extends keyof LoyaltyState>(key: K, value: LoyaltyState[K]) => void;
}

// Each row: fixed label column on the left + an input zone that stretches to the
// card's right edge, so inputs grow with the viewport and the trailing
// unit/text stays flush-right (matches Figma).
const ROW = "flex items-center gap-6";
const LABEL = "flex w-[300px] shrink-0 items-center gap-1 text-[14px] leading-5 text-ink";
const EQ = "w-4 shrink-0 text-center text-[16px] leading-6 text-ink";
const UNIT_GHOST = "shrink-0 rounded-lg px-3 py-1.5 text-[15px] font-medium leading-5";

/** Point conversion rate, redeem-by-points settings, and tick-rule exclusions. */
export function ConversionSettings({ state, set }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Conversion rate: X VND = 1 point */}
      <div className={ROW}>
        <span className={LABEL}>
          Tỉ lệ quy đổi điểm thưởng:
          <InfoTooltip title="Quy định số tiền mua hàng để đổi lấy 1 điểm thưởng" />
        </span>
        <AmountInput
          value={state.spendPerPoint}
          onChange={(v) => set("spendPerPoint", v)}
          unit="VND"
          className="flex-1"
        />
        <span className={EQ}>=</span>
        <span className="shrink-0 whitespace-nowrap text-[16px] leading-6 text-ink">
          1 điểm thưởng
        </span>
      </div>

      {/* Allow paying by points: X points = Y VND */}
      <div className={ROW}>
        <div className="flex w-[300px] shrink-0 items-center">
          <CheckboxField
            checked={state.allowPayByPoint}
            onChange={(v) => set("allowPayByPoint", v)}
            label="Cho phép thanh toán bằng điểm"
          />
        </div>
        <AmountInput
          value={state.payPoint}
          onChange={(v) => set("payPoint", v)}
          unit="Điểm"
          className="flex-1"
        />
        <span className={EQ}>=</span>
        <AmountInput
          value={state.payValue}
          onChange={(v) => set("payValue", v)}
          unit="VND"
          className="flex-1"
        />
      </div>

      {/* Pay by points only after N purchases (input aligned under row-2 col 2) */}
      <div className={ROW}>
        <span className={LABEL}>
          Thanh toán bằng điểm sau
          <InfoTooltip title="Quy định số tiền mua hàng để đổi lấy 1 điểm thưởng" />
        </span>
        {/* Invisible mirrors of row-2's first input + unit + "=" keep this input
            in the same column on every screen width. */}
        <span className="invisible flex-1" aria-hidden />
        <span className={`invisible ${UNIT_GHOST}`} aria-hidden>
          Điểm
        </span>
        <span className={`invisible ${EQ}`} aria-hidden>
          =
        </span>
        <AmountInput
          value={state.payAfterPurchases}
          onChange={(v) => set("payAfterPurchases", v)}
          unit="Lần mua"
          className="flex-1"
        />
      </div>

      {/* Tick-rule exclusions */}
      <div className="flex flex-col gap-3 pt-1">
        {EXCLUSIONS.map((item) => (
          <CheckboxField
            key={item.key}
            checked={state[item.key]}
            onChange={(v) => set(item.key, v)}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
}
