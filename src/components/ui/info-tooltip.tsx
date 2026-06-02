"use client";

import { Tooltip } from "antd";
import { Info } from "lucide-react";

/**
 * Green info circle that reveals a white tooltip with dark text and a
 * downward arrow on hover, sitting above the trigger (matches Figma).
 */
export function InfoTooltip({ title }: { title: string }) {
  return (
    <Tooltip
      title={title}
      placement="top"
      color="#FFFFFF"
      overlayInnerStyle={{
        color: "#121212",
        fontSize: 14,
        lineHeight: "20px",
        padding: "10px 14px",
        boxShadow: "0px 6px 16px -4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <span className="inline-flex cursor-help text-primary-accent">
        <Info className="h-4 w-4" strokeWidth={2} />
      </span>
    </Tooltip>
  );
}
