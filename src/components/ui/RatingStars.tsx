"use client";
import React from "react";
import { Icon } from "@/components/icons";

export function RatingStars({ rating, count }: { rating: number; count?: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={i < full ? "text-[--color-accent]" : half && i === full ? "text-[--color-accent]/60" : "text-[--neutral-400]"}
          strokeWidth={1.4}
          size={16}
        />
      ))}
      {typeof count === "number" && (
        <span className="text-[--text-sm] text-[--neutral-300]">({count.toLocaleString()})</span>
      )}
    </div>
  );
}
