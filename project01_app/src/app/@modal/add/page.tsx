'use client';

import Form from '@/components/Form';
import { useRouter } from 'next/navigation';

export default function AddModal() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center ">
      <div
        className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] cursor-pointer"
        onClick={handleClose}
      ></div>
      <Form onClose={handleClose} title="Add Your Connection" />
    </div>
  );
}
