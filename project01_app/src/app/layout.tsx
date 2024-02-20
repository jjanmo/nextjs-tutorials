import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/connect/_components/Navbar';

export const metadata: Metadata = {
  title: 'Random Connect',
  description: 'You can connect with someone now.',
};

interface RootProps {
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: PropsWithChildren<RootProps>) {
  return (
    <html>
      <body>
        <header>
          <Navbar />
        </header>
        <main className="min-h-[calc(100vh-5rem)] w-full bg-slate-50">
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
