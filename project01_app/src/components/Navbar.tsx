'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/create');
  };

  return (
    <div className="w-full h-20  bg-green-300">
      <div className="w-1/2 h-full flex justify-between items-center mx-auto">
        <div className="font-mono text-2xl text-white h-full flex items-center">
          <Link href="/">Random Connect</Link>
        </div>
        <div className="font-serif italic text-2xl text-green-500 animate-pulse h-full flex items-center hover:scale-150 ease-out duration-500">
          <button onClick={handleClick}>Create Connection 🌍</button>
        </div>
      </div>
    </div>
  );
}
