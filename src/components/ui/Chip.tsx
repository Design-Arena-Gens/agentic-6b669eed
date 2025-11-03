"use client";
import React from "react";
import { cn } from "@/utils/cn";

export type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  selected?: boolean;
};

export function Chip({ className, selected, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "chip select-none",
        selected && "bg-[--color-primary]/15 text-[--color-primary]",
        className
      )}
      {...props}
    />
  );
}
