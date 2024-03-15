import Loader from '@/components/common/Loader';
import { PropsWithChildren, Suspense } from 'react';

interface Props {
  info: React.ReactNode;
  videos: React.ReactNode;
}

export default function MovieDetailPageLayout({ info, videos }: PropsWithChildren<Props>) {
  return (
    <div className="w-full flex">
      <div className="w-1/2 min-h-[calc(100vh-5rem)]">
        <Suspense fallback={<Loader />}>{info}</Suspense>
      </div>
      <div className="w-1/2 min-h-[calc(100vh-5rem)]">
        <Suspense fallback={<Loader />}>{videos}</Suspense>
      </div>
    </div>
  );
}
