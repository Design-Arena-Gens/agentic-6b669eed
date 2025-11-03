"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, IconName } from "@/components/icons";

export type TabItem = {
  href: string;
  icon: IconName;
  label: string;
};

export function TabBar({ items }: { items: TabItem[] }) {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[--color-border] bg-[--color-surface-1]/90 backdrop-blur">
      <div className="mx-auto grid max-w-3xl grid-cols-4">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 py-2 text-center text-[--text-xs]"
            >
              <Icon
                name={item.icon}
                className={active ? "text-[--color-primary]" : "text-[--neutral-300]"}
                strokeWidth={active ? 2 : 1.6}
              />
              <span className={active ? "text-[--color-primary]" : "text-[--neutral-300]"}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
