import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'SupaNext',
  description: 'Next.js with Supabase',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <link rel="icon" href="public/icon.png" sizes="any" />
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
