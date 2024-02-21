import { PropsWithChildren } from 'react';

interface Props {
  modal: React.ReactNode;
}

export default function ConnectLayout({ children, modal }: PropsWithChildren<Props>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
