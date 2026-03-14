"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gold-600 via-gold-500 to-olive-600 border-b-2 md:border-b-4 border-brown-900 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-3xl font-bold text-white drop-shadow-2xl tracking-tight">
            Noah Kahan
          </Link>
        </div>
      </div>
    </nav>
  );
}
