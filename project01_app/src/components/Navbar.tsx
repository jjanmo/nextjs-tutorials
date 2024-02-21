'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="font-mono w-full h-20  bg-emerald-300">
      <div className="w-1/2 h-full flex items-center mx-auto">
        <div className="text-2xl text-white h-full flex items-center mx-4">
          <Link href="/">Home</Link>
        </div>
        <div className="text-2xl text-white h-full flex items-center mx-4">
          <Link href="/connect">Connect</Link>
        </div>
        <div className="text-2xl text-white h-full flex items-center mx-4">
          <Link href="/movies">Movies</Link>
        </div>
      </div>
    </div>
  );
}
