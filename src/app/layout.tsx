import type { Metadata } from "next";
import { AntdRegistry } from "@/components/providers/antd-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empos POS",
  description: "Empos POS – Thiết lập tích điểm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
