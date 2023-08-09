'use client';

import Form from '@/components/Form';
import { Modal } from '@/components/Modal';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export default function CreateModal() {
  const router = useRouter();

  const handleClickClose = () => {
    router.back();
  };

  return createPortal(
    <Modal onClose={handleClickClose}>
      <Form onClose={handleClickClose} />
    </Modal>,
    document.body
  );
}
