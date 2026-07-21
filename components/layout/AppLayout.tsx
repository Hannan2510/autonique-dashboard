import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";
import Navbar from "./Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <AppSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
  <Navbar />

  <div className="mt-8">
    {children}
  </div>
</main>
    </div>
  );
}