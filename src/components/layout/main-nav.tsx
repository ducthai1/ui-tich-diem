import {
  BadgePercent,
  BookText,
  Calculator,
  ConciergeBell,
  FileText,
  Handshake,
  LayoutDashboard,
  Package,
  Receipt,
  UserRound,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  bold?: boolean;
}

const MODULES: NavItem[] = [
  { label: "Tổng quan", icon: LayoutDashboard, bold: true },
  { label: "Sản phẩm", icon: Package },
  { label: "Phòng bàn", icon: Utensils },
  { label: "Khuyến mãi", icon: BadgePercent },
  { label: "Giao dịch", icon: Receipt, active: true },
  { label: "Sổ quỹ", icon: BookText },
  { label: "Đối tác", icon: Handshake },
  { label: "Báo cáo", icon: FileText },
];

const ROLES: NavItem[] = [
  { label: "Nhân viên order", icon: UserRound },
  { label: "Lễ tân", icon: ConciergeBell },
  { label: "Thu ngân", icon: Calculator },
];

function ModuleButton({ label, icon: Icon, active, bold }: NavItem) {
  return (
    <button
      className={cn(
        "flex items-center gap-1.5 text-[15px] leading-5 transition-colors",
        active
          ? "font-semibold text-primary"
          : bold
            ? "font-semibold text-ink-strong hover:text-primary"
            : "font-normal text-ink-strong hover:text-primary",
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
      {label}
    </button>
  );
}

function RoleButton({ label, icon: Icon }: NavItem) {
  return (
    <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-[14px] font-medium leading-5 text-white transition-colors hover:bg-primary-hover">
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
      {label}
    </button>
  );
}

/** Secondary navigation row: product modules (left) + POS role launchers (right). */
export function MainNav() {
  return (
    <nav className="flex items-center justify-between border-b border-line bg-white px-14 py-2.5">
      <div className="flex items-center gap-6">
        {MODULES.map((item) => (
          <ModuleButton key={item.label} {...item} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {ROLES.map((item) => (
          <RoleButton key={item.label} {...item} />
        ))}
      </div>
    </nav>
  );
}
