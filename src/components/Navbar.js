"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Sarkari Prarup
      </Link>

      <div className="flex gap-4 text-sm md:text-base">
        <Link href="/gap-certificate">Gap</Link>
        <Link href="/domicile-certificate">Domicile</Link>
        <Link href="/income-certificate">Income</Link>
        <Link href="/ews-certificate">EWS</Link>
        <Link href="/resume-builder">Resume</Link>
      </div>
    </nav>
  );
}
