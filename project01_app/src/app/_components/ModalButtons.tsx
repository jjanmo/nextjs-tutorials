'use client';

import { useRouter } from 'next/navigation';

export default function ModalButtons() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="w-full flex justify-between mt-4">
      <button type="button" className="w-1/2 bg-red-400 text-white p-2 rounded-s-lg" onClick={handleClose}>
        Cancel
      </button>
      <button className="w-1/2 bg-emerald-400 text-white p-2 rounded-e-lg">Create</button>
    </div>
  );
}
