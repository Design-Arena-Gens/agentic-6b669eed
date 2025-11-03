"use client";
import React from "react";

export type IconName =
  | "home"
  | "search"
  | "heart"
  | "cart"
  | "user"
  | "star"
  | "map-pin"
  | "chevron-right"
  | "chevron-left"
  | "filter"
  | "plus"
  | "minus";

export type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
  ariaLabel?: string;
};

const createIcon = (
  path: React.ReactNode,
  viewBox: string = "0 0 24 24"
) =>
  function SvgIcon({ size = 24, className, strokeWidth = 1.6 }: Omit<IconProps, "name">) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden
      >
        {path}
      </svg>
    );
  };

const Home = createIcon(
  <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
);

const Search = createIcon(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-3.5-3.5" />
  </>
);

const Heart = createIcon(
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
);

const Cart = createIcon(
  <>
    <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.5H8.5a2 2 0 0 1-2-1.5L4 3H2" />
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
  </>
);

const User = createIcon(
  <>
    <circle cx="12" cy="8.5" r="4" />
    <path d="M20 20c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
  </>
);

const Star = createIcon(
  <path d="m12 3.5 2.9 5.88 6.5.95-4.7 4.58 1.1 6.42L12 18.9l-5.8 3.43 1.1-6.42-4.7-4.58 6.5-.95L12 3.5Z" />
);

const MapPin = createIcon(
  <>
    <path d="M12 22s7-5.33 7-11a7 7 0 1 0-14 0c0 5.67 7 11 7 11Z" />
    <circle cx="12" cy="11" r="3" />
  </>
);

const ChevronRight = createIcon(<path d="m9 6 6 6-6 6" />);
const ChevronLeft = createIcon(<path d="m15 6-6 6 6 6" />);
const Filter = createIcon(
  <>
    <path d="M3 6h18" />
    <path d="M8 12h8" />
    <path d="M10 18h4" />
  </>
);
const Plus = createIcon(<path d="M12 5v14M5 12h14" />);
const Minus = createIcon(<path d="M5 12h14" />);

const registry: Record<IconName, React.ComponentType<Omit<IconProps, "name">>> = {
  home: Home,
  search: Search,
  heart: Heart,
  cart: Cart,
  user: User,
  star: Star,
  "map-pin": MapPin,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  filter: Filter,
  plus: Plus,
  minus: Minus,
};

export function Icon({ name, size, className, strokeWidth = 1.8, ariaLabel }: IconProps) {
  const Component = registry[name];
  return (
    <span role={ariaLabel ? "img" : undefined} aria-label={ariaLabel} className="inline-flex">
      <Component size={size} className={className} strokeWidth={strokeWidth} />
    </span>
  );
}
