import { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <header>
          <Navbar />
        </header>
        <main className="min-h-[calc(100vh-5rem)] w-full bg-slate-50">{children}</main>
      </body>
    </html>
  );
}
