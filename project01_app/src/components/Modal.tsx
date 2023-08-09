import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  content: React.ReactNode;
}

export default function Modal({ content }: Props) {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-black opacity-50">
      <div className="absolute right-10 top-10 ">
        <AiOutlineCloseCircle />
      </div>
      <div className="w-1/2 h-1/2">{content}</div>
    </div>
  );
}
