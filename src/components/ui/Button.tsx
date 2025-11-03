"use client";
import React from "react";
import { cn } from "@/utils/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[--radius-lg] font-medium tap-active focus-ring transition-colors";

  const variants: Record<Required<ButtonProps>["variant"], string> = {
    primary:
      "bg-[--color-primary] text-white hover:bg-[--color-primary-600] active:bg-[--color-primary-700]",
    secondary:
      "bg-[--neutral-800] text-[--neutral-100] hover:bg-[--neutral-700]",
    ghost: "bg-transparent text-[--color-foreground] hover:bg-black/5",
    outline:
      "bg-transparent text-[--color-foreground] ring-1 ring-[--color-border] hover:bg-black/5",
  } as const;

  const sizes: Record<Required<ButtonProps>["size"], string> = {
    sm: "h-9 px-3 text-[--text-sm]",
    md: "h-11 px-4 text-[--text-base]",
    lg: "h-12 px-5 text-[--text-lg]",
  } as const;

  return (
    <button
      className={cn(
        base,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
