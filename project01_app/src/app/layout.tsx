import ReactQueryProviders from '@/hooks/useReactQuery';
import { PropsWithChildren } from 'react';
import Navbar from '@/components/common/Navbar';
import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <ReactQueryProviders>
          <header>
            <Navbar />
          </header>
          <main className="min-h-[calc(100vh-4rem)] w-full">{children}</main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
