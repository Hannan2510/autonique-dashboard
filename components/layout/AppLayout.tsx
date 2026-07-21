import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";
import Navbar from "./Navbar";

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  action?: ReactNode;
}

export default function AppLayout({ children, title, description, action }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F0F7F4] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-250">
      <AppSidebar />

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <Navbar title={title} description={description} action={action} />

        <div className="mt-8">
          {children}
        </div>
      </main>
    </div>
  );
}