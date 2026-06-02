import Image from "next/image";
import { ChevronDown, Star, Sun } from "lucide-react";

const pillButton =
  "inline-flex items-center gap-1 rounded-lg border border-line px-3 py-1.5 text-[15px] leading-5 text-ink-strong hover:bg-canvas";

/** White application header: brand logo + license / theme / branch / locale / profile controls. */
export function TopBar() {
  return (
    <header className="flex h-14 items-center justify-between bg-white px-14">
      <div className="flex items-center gap-2">
        <Image src="/images/loyalty/logo.svg" alt="Empos" width={32} height={32} />
        <span className="text-[16px] font-semibold leading-6 text-ink-strong">
          Empos
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button className={pillButton}>Gia hạn/Kích hoạt bản quyền</button>
        <button className={pillButton}>
          Chủ đề
          <ChevronDown className="h-4 w-4 text-ink-muted" />
        </button>
        <button className={pillButton}>
          Chi nhánh Hồ Chí Minh
          <ChevronDown className="h-4 w-4 text-ink-muted" />
        </button>

        <div className="ml-1 flex items-center gap-4 text-[15px] text-ink-strong">
          <button className="flex items-center gap-1">
            <span className="flex h-5 w-7 items-center justify-center rounded-sm bg-danger">
              <Star className="h-3 w-3 fill-[#FFFF00] text-[#FFFF00]" />
            </span>
            VI
            <ChevronDown className="h-4 w-4 text-ink-muted" />
          </button>
          <button className="flex items-center gap-1">
            <Sun className="h-5 w-5" />
            Thiết lập
          </button>
          <button className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[13px] font-semibold text-white">
              T
            </span>
            <span className="hidden xl:inline">Nguyễn Ngọc Quỳnh Trang</span>
            <ChevronDown className="h-4 w-4 text-ink-muted" />
          </button>
        </div>
      </div>
    </header>
  );
}
