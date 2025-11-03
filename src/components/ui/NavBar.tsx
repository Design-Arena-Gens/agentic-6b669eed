"use client";
import React from "react";
import { Icon, IconName } from "@/components/icons";

export type NavBarProps = {
  title?: string;
  leftAction?: { icon: IconName; onClick?: () => void };
  rightAction?: { icon: IconName; onClick?: () => void };
};

export function NavBar({ title, leftAction, rightAction }: NavBarProps) {
  return (
    <div className="sticky top-0 z-40 bg-[--color-surface]/80 backdrop-blur supports-[backdrop-filter]:bg-[--color-surface]/70">
      <div className="mx-auto flex h-14 max-w-3xl items-center gap-3 px-4">
        <button
          className="h-9 w-9 rounded-full hover:bg-white/5 tap-active focus-ring flex items-center justify-center"
          onClick={leftAction?.onClick}
          aria-label="Back"
        >
          {leftAction && <Icon name={leftAction.icon} />}
        </button>
        <div className="flex-1 text-center text-[--text-lg] font-semibold">
          {title}
        </div>
        <button
          className="h-9 w-9 rounded-full hover:bg-white/5 tap-active focus-ring flex items-center justify-center"
          onClick={rightAction?.onClick}
          aria-label="Action"
        >
          {rightAction && <Icon name={rightAction.icon} />}
        </button>
      </div>
    </div>
  );
}
