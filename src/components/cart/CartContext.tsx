"use client";
import React, { createContext, useContext, useMemo, useReducer } from "react";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  imageUrl?: string;
};

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: "add"; item: Omit<CartItem, "qty">; qty?: number }
  | { type: "remove"; id: string }
  | { type: "inc"; id: string }
  | { type: "dec"; id: string }
  | { type: "clear" };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "add": {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + (action.qty ?? 1) } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.item, qty: action.qty ?? 1 }] };
    }
    case "remove":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "inc":
      return { items: state.items.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i)) };
    case "dec":
      return {
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, qty: Math.max(0, i.qty - 1) } : i))
          .filter((i) => i.qty > 0),
      };
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

function useCartInternal() {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const total = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [state.items]
  );
  const count = useMemo(() => state.items.reduce((sum, i) => sum + i.qty, 0), [state.items]);

  return {
    items: state.items,
    total,
    count,
    add: (item: Omit<CartItem, "qty">, qty = 1) => dispatch({ type: "add", item, qty }),
    remove: (id: string) => dispatch({ type: "remove", id }),
    inc: (id: string) => dispatch({ type: "inc", id }),
    dec: (id: string) => dispatch({ type: "dec", id }),
    clear: () => dispatch({ type: "clear" }),
  };
}

export type CartContextValue = ReturnType<typeof useCartInternal>;
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const value = useCartInternal();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
