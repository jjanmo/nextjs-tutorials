'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="font-mono w-full h-20  bg-emerald-300">
      <div className="w-1/2 h-full flex justify-between items-center mx-auto">
        <div className="text-2xl text-white h-full flex items-center">
          <Link href="/">Random Connect</Link>
        </div>
      </div>
    </div>
  );
}