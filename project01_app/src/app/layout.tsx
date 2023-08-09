import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Random Connect',
  description: 'You can connect with someone now.',
};

interface RootProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootProps) {
  return (
    <html>
      <body>
        <header>
          <Navbar />
        </header>

        <main className="min-h-[calc(100vh-5rem)] w-full bg-green-50">
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
