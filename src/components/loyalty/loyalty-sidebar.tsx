import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Tích điểm", active: true },
  { label: "Tích hợp hệ sinh thái", active: false },
];

/** Left navigation card for the loyalty settings area (260px, white). */
export function LoyaltySidebar() {
  return (
    <aside className="flex w-[260px] shrink-0 flex-col gap-2 rounded-card bg-white p-2 py-3 shadow-card">
      {ITEMS.map((item) => (
        <button
          key={item.label}
          className={cn(
            "flex h-9 items-center rounded-lg px-2 text-left text-[14px] leading-5 transition-colors",
            item.active
              ? "bg-info-surface font-medium text-info"
              : "text-ink hover:bg-canvas",
          )}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
}
