import { AppShell } from "@/components/layout/app-shell";
import { LoyaltySettings } from "@/components/loyalty/loyalty-settings";
import { LoyaltySidebar } from "@/components/loyalty/loyalty-sidebar";

export default function LoyaltyPage() {
  return (
    <AppShell>
      <h1 className="mb-2 text-[18px] font-semibold leading-[26px] text-ink-strong">
        Tích điểm
      </h1>
      <div className="flex items-start gap-3.5">
        <LoyaltySidebar />
        <LoyaltySettings />
      </div>
    </AppShell>
  );
}
