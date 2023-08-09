import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Random Connect',
  description: 'You can connect with someone now.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div id="root-modal"></div>

        <header>
          <Navbar />
        </header>

        <main className="min-h-[calc(100vh-5rem)] w-full bg-green-50">
          {children}
        </main>
      </body>
    </html>
  );
}
