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

const ROW = "flex flex-wrap items-center gap-3";
const LABEL = "flex w-[320px] shrink-0 items-center gap-1 text-[14px] leading-5 text-ink";
const COL = "w-[240px] shrink-0";
const EQ = "w-4 shrink-0 text-center text-[16px] leading-6 text-ink";

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
          className="w-[460px]"
        />
        <span className={EQ}>=</span>
        <span className="text-[16px] leading-6 text-ink">1 điểm thưởng</span>
      </div>

      {/* Allow paying by points: X points = Y VND */}
      <div className={ROW}>
        <div className="w-[320px] shrink-0">
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
          className={COL}
        />
        <span className={EQ}>=</span>
        <AmountInput
          value={state.payValue}
          onChange={(v) => set("payValue", v)}
          unit="VND"
          className={COL}
        />
      </div>

      {/* Pay by points only after N purchases (input aligned to 2nd column) */}
      <div className={ROW}>
        <span className={LABEL}>
          Thanh toán bằng điểm sau
          <InfoTooltip title="Quy định số tiền mua hàng để đổi lấy 1 điểm thưởng" />
        </span>
        <span className={COL} aria-hidden />
        <span className={EQ} aria-hidden />
        <AmountInput
          value={state.payAfterPurchases}
          onChange={(v) => set("payAfterPurchases", v)}
          unit="Lần mua"
          className={COL}
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
