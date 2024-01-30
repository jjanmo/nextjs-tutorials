import React, { PropsWithChildren } from 'react';

interface Props {
  onClose: () => void;
}

export default function Modal({ children, onClose }: PropsWithChildren<Props>) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center ">
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] cursor-pointer" onClick={onClose}></div>
      {children}
    </div>
  );
}
