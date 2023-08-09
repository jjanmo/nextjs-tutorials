import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      <div className="relative w-1/2 h-1/2 text-white text-3xl bg-red-300 rounded-lg">
        <div
          className="absolute right-1/2 -top-16 cursor-pointer"
          onClick={onClose}
        >
          <AiOutlineCloseCircle size={50} color="white" />
        </div>
        {children}
      </div>
    </div>
  );
}
