import { createPortal } from 'react-dom';
import Modal from './Modal';
import { useEffect, useRef } from 'react';
import useIsMounted from '@/hooks/useIsMounted';

interface Props {
  content: React.ReactNode;
  showModal: boolean;
}

export default function ModalPortal({ content, showModal }: Props) {
  const isMouted = useIsMounted();
  const rootModalElem = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    rootModalElem.current = document.querySelector('#root-modal');
  }, []);

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  return isMouted() && showModal
    ? createPortal(
        <Modal content={content} />,
        rootModalElem.current as HTMLDivElement
      )
    : null;
}
