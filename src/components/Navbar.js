"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Sarkari Prarup
      </Link>

      <Link href="/subscribe" className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition">
  Unlimited Certs ₹99
</Link>
    </nav>
  );
}
