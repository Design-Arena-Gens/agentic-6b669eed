"use client";
import React from "react";
import { cn } from "@/utils/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card p-4",
        hover && "hover:shadow-[var(--shadow-2)] transition-shadow",
        className
      )}
      {...props}
    />
  );
}
