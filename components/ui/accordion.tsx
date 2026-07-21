"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItem: null,
  toggleItem: () => {},
});

export function Accordion({
  children,
  defaultValue,
  className,
}: {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultValue || null);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={cn("space-y-2.5", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

const ItemContext = React.createContext<string>("");

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ItemContext.Provider value={value}>
      <div
        className={cn(
          "border border-slate-200/90 rounded-xl bg-white/95 overflow-hidden transition-all shadow-2xs hover:border-[#2E7D5B]/30",
          className
        )}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { openItem, toggleItem } = React.useContext(AccordionContext);
  const value = React.useContext(ItemContext);
  const isOpen = openItem === value;

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between p-4 text-left font-bold text-slate-900 text-xs sm:text-sm md:text-base hover:text-[#2E7D5B] transition-colors cursor-pointer",
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200",
          isOpen && "rotate-180 text-[#2E7D5B]"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { openItem } = React.useContext(AccordionContext);
  const value = React.useContext(ItemContext);
  const isOpen = openItem === value;

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in-50 duration-150",
        className
      )}
    >
      {children}
    </div>
  );
}
