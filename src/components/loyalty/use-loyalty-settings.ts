"use client";

import { useCallback, useState } from "react";

export type CustomerScope = "group" | "all";
export type BranchScope = "selected" | "all";

export interface LoyaltyState {
  spendPerPoint: string;
  allowPayByPoint: boolean;
  payPoint: string;
  payValue: string;
  payAfterPurchases: string;
  excludeDiscountedProducts: boolean;
  excludeDiscountedInvoices: boolean;
  excludePointPaidInvoices: boolean;
  customerScope: CustomerScope;
  customerGroups: string[];
  branchScope: BranchScope;
  branches: string[];
}

const INITIAL: LoyaltyState = {
  spendPerPoint: "",
  allowPayByPoint: false,
  payPoint: "",
  payValue: "",
  payAfterPurchases: "",
  excludeDiscountedProducts: false,
  excludeDiscountedInvoices: false,
  excludePointPaidInvoices: false,
  customerScope: "group",
  customerGroups: ["Nhóm A", "Nhóm B", "Nhóm C"],
  branchScope: "selected",
  branches: ["Chi nhánh 1", "Chi nhánh 2", "Chi nhánh 3"],
};

/** Local form state for the loyalty settings screen. */
export function useLoyaltySettings() {
  const [state, setState] = useState<LoyaltyState>(INITIAL);

  const set = useCallback(
    <K extends keyof LoyaltyState>(key: K, value: LoyaltyState[K]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const reset = useCallback(() => setState(INITIAL), []);

  return { state, set, reset };
}
