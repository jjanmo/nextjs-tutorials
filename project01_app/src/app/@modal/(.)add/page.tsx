'use client';

import Form from '@/components/Form';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';

export default function AddModalPage() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <Form onClose={handleClose} title="Add Your Connection" />
    </Modal>
  );
}
