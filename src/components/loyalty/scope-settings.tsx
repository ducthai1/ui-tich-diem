"use client";

import { Info } from "lucide-react";
import { LabeledSelect } from "@/components/ui/labeled-select";
import { RadioField } from "@/components/ui/radio-field";
import type { LoyaltyState } from "./use-loyalty-settings";

interface Props {
  state: LoyaltyState;
  set: <K extends keyof LoyaltyState>(key: K, value: LoyaltyState[K]) => void;
}

const SECTION_TITLE = "text-[15px] font-semibold leading-5 text-ink";

const CUSTOMER_GROUP_OPTIONS = ["Nhóm A", "Nhóm B", "Nhóm C", "Nhóm D", "Nhóm E"];
const BRANCH_OPTIONS = [
  "Chi nhánh 1",
  "Chi nhánh 2",
  "Chi nhánh 3",
  "Chi nhánh 4",
  "Chi nhánh 5",
];

/** Customer-group + branch scope selection, followed by the info note. */
export function ScopeSettings({ state, set }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {/* Áp dụng cho */}
      <div className="flex flex-col gap-3">
        <h3 className={SECTION_TITLE}>Áp dụng cho</h3>
        <div className="flex items-center gap-4">
          <div className="w-[170px] shrink-0">
            <RadioField
              checked={state.customerScope === "group"}
              onChange={() => set("customerScope", "group")}
              label="Nhóm khách hàng"
            />
          </div>
          {(
            <LabeledSelect
              label="Nhóm khách hàng"
              placeholder="Chọn nhóm khách hàng"
              options={CUSTOMER_GROUP_OPTIONS}
              values={state.customerGroups}
              onChange={(v) => set("customerGroups", v)}
              disabled={state.customerScope !== "group"}
              className="flex-1"
            />
          )}
        </div>
        <RadioField
          checked={state.customerScope === "all"}
          onChange={() => set("customerScope", "all")}
          label="Toàn bộ khách hàng"
        />
      </div>

      {/* Phạm vi chi nhánh */}
      <div className="flex flex-col gap-3">
        <h3 className={SECTION_TITLE}>Phạm vi chi nhánh</h3>
        <div className="flex items-center gap-4">
          <div className="w-[170px] shrink-0">
            <RadioField
              checked={state.branchScope === "selected"}
              onChange={() => set("branchScope", "selected")}
              label="Tùy chọn chi nhánh"
            />
          </div>
          {(
            <LabeledSelect
              label="Chi nhánh"
              placeholder="Chọn chi nhánh"
              options={BRANCH_OPTIONS}
              values={state.branches}
              onChange={(v) => set("branches", v)}
              disabled={state.branchScope !== "selected"}
              className="flex-1"
            />
          )}
        </div>
        <RadioField
          checked={state.branchScope === "all"}
          onChange={() => set("branchScope", "all")}
          label="Toàn bộ chi nhánh"
        />
      </div>

      {/* Lưu ý note: header row, then the detail on its own line (per Figma) */}
      <div className="flex flex-col gap-1 rounded-lg bg-info-surface p-3">
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 shrink-0 text-info" />
          <span className="text-[14px] font-semibold leading-5 text-ink">
            Lưu ý:
          </span>
        </div>
        <p className="text-[14px] leading-5 text-ink-faint">
          - Bật thiết lập tích điểm, mặc định sẽ khởi tạo với tất cả hàng hóa
          trong gian hàng của bạn được tích điểm. Bạn có thể thiết lập riêng cho
          từng sản phẩm nếu muốn
        </p>
      </div>
    </div>
  );
}
