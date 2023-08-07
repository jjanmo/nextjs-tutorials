import Link from 'next/link';
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
        <Navbar />

        {children}
      </body>
    </html>
  );
}
