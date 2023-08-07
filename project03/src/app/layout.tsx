import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next.js using app directory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
