import { MainNav } from "./main-nav";
import { TopBar } from "./top-bar";

/** Full application chrome: white header + module nav over the grey work canvas. */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas">
      <TopBar />
      <MainNav />
      <main className="px-14 py-6">{children}</main>
    </div>
  );
}
