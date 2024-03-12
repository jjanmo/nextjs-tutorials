import Loading from '@/components/common/Loading';
import React, { PropsWithChildren, Suspense } from 'react';

interface Props {
  info: React.ReactNode;
  videos: React.ReactNode;
}

export default function MovieDetailLayout({ children, info, videos }: PropsWithChildren<Props>) {
  return (
    <div>
      <h1>Movie Detail Layout</h1>
      {children}

      <Suspense fallback={<Loading />}>{info}</Suspense>
      <div className="bg-black h-1 w-full my-1"></div>
      <Suspense fallback={<Loading />}>{videos}</Suspense>
    </div>
  );
}
