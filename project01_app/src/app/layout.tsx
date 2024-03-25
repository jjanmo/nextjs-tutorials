import ReactQueryProviders from '@/hooks/useReactQuery';
import { PropsWithChildren } from 'react';
import Navbar from '@/components/common/Navbar';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <ReactQueryProviders>
          <StyledComponentsRegistry>
            <header>
              <Navbar />
            </header>
            <main className="min-h-[calc(100vh-4rem)] w-full">{children}</main>
          </StyledComponentsRegistry>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
