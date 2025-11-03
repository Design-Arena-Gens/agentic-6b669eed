"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/utils/cn";

export function SearchBar({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("flex items-center gap-2 rounded-[--radius-lg] bg-[--color-surface-1] ring-1 ring-[--color-border] px-3 h-11", className)}>
      <Icon name="search" className="text-[--neutral-300]" />
      <input
        className="flex-1 bg-transparent outline-none placeholder:text-[--neutral-400] text-[--text-base]"
        placeholder="Search sushi, burgers, caf?s..."
        {...props}
      />
      <button className="rounded-full bg-[--neutral-800] px-3 py-1 text-[--text-sm] text-[--neutral-100] hover:bg-[--neutral-700] tap-active">
        Filter
      </button>
    </div>
  );
}
