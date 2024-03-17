import Loader from '@/components/common/Loader';
import { PropsWithChildren, Suspense } from 'react';

interface Props {
  info: React.ReactNode;
  videos: React.ReactNode;
}

export default function MovieDetailPageLayout({ children, info, videos }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col min-w-min max-w-7xl px-6 mx-auto">
      {children}
      <div className="flex">
        <div className="w-1/2 bg-slate-300">
          <Suspense fallback={<Loader />}>{info}</Suspense>
        </div>
        <div className="w-1/2 bg-blue-300">
          <Suspense fallback={<Loader />}>{videos}</Suspense>
        </div>
      </div>
    </div>
  );
}
