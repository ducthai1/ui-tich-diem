"use client";

import { useServerInsertedHTML } from "next/navigation";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { useMemo } from "react";

/**
 * Antd v5 + Next App Router SSR style registry.
 * Injects collected cssinjs styles during server render to avoid FOUC,
 * and applies the Empos primary-green theme token.
 */
export function AntdRegistry({ children }: { children: React.ReactNode }) {
  const cache = useMemo(() => createCache(), []);

  useServerInsertedHTML(() => (
    <style
      id="antd-cssinjs"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00664B",
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
