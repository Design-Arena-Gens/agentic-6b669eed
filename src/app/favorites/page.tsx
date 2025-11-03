"use client";
import { NavBar } from "@/components/ui/NavBar";

export default function FavoritesPage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl">
      <NavBar title="Saved" />
      <main className="px-4 py-4">
        <p className="text-[--neutral-300]">Your saved places will appear here.</p>
      </main>
    </div>
  );
}
