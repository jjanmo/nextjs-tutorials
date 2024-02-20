'use client';

import { useRouter } from 'next/navigation';

export default function Dim() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] cursor-pointer"
      onClick={handleClose}
    ></div>
  );
}
