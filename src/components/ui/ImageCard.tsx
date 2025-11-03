"use client";
import React from "react";
import Image from "next/image";
import { Card } from "./Card";
import { RatingStars } from "./RatingStars";
import { Icon } from "@/components/icons";

export type ImageCardProps = {
  imageUrl: string;
  title: string;
  subtitle?: string;
  rating?: number;
  time?: string;
  price?: string;
  favorite?: boolean;
};

export function ImageCard({ imageUrl, title, subtitle, rating, time, price, favorite }: ImageCardProps) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="relative ratio-4/3 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <button className="absolute right-2 top-2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 tap-active">
          <Icon name="heart" />
        </button>
        {time && (
          <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[--text-xs] text-black">{time}</div>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="text-[--text-base] font-semibold">{title}</div>
          {price && <div className="text-[--text-sm] text-[--neutral-300]">{price}</div>}
        </div>
        {subtitle && (
          <div className="mt-1 text-[--text-sm] text-[--neutral-300]">{subtitle}</div>
        )}
        {typeof rating === "number" && (
          <div className="mt-2"><RatingStars rating={rating} /></div>
        )}
      </div>
    </Card>
  );
}
