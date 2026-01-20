import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 w-full flex flex-row items-center justify-between">
      <div>
        <Image
          className="dark:invert rounded-2xl shadow-lg border border-red-500"
          src="/globe.svg"
          alt="Next.js logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/details" className="hover:text-gray-300">
          Details
        </Link>
        <Link href="/pay" className="hover:text-gray-300">
          Pay
        </Link>
      </nav>
    </header>
  );
}
