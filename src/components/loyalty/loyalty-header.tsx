import Image from "next/image";
import { ToggleSwitch } from "@/components/ui/toggle-switch";

interface LoyaltyHeaderProps {
  enabled: boolean;
  onToggle: (next: boolean) => void;
}

/** Star + title/description on the left, ON/OFF toggle on the right. */
export function LoyaltyHeader({ enabled, onToggle }: LoyaltyHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 flex-1 gap-3">
        <Image
          src="/images/loyalty/star.svg"
          alt=""
          width={50}
          height={50}
          className="shrink-0"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-[16px] font-semibold leading-6 text-ink">
            Thiết lập tích điểm
          </h2>
          <p className="text-[14px] leading-5 text-ink-muted">
            Tích điểm thưởng khi mua hàng, quy đổi điểm thưởng để thanh toán đơn
            hàng hoặc sử dụng điểm thưởng để chia nhóm khách hàng.
          </p>
        </div>
      </div>
      <ToggleSwitch checked={enabled} onChange={onToggle} />
    </div>
  );
}
