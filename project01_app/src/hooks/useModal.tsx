import { useCallback, useState } from 'react';

interface Props {
  initialVisible?: boolean;
}

export default function useModal({ initialVisible }: Props) {
  const [visible, setVisible] = useState<boolean>(initialVisible ?? false);

  const show = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  return {
    visible,
    show,
    close,
  };
}
