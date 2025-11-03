"use client";
import { NavBar } from "@/components/ui/NavBar";
import { SearchBar } from "@/components/ui/SearchBar";

export default function SearchPage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl">
      <NavBar title="Search" />
      <main className="px-4 py-4">
        <SearchBar autoFocus />
        <p className="mt-4 text-[--neutral-300]">Try "sushi", "burger", or "caf?"</p>
      </main>
    </div>
  );
}
