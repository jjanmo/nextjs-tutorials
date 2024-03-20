import Loader from '@/components/common/Loader';
import { PropsWithChildren, Suspense } from 'react';

interface Props {
  info: React.ReactNode;
  videos: React.ReactNode;
}

export default function MovieDetailPageLayout({ children, info, videos }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col bg-emerald-50">
      {children}
      <div className="max-w-[1170px] min-h-[800px] -mt-20 mx-auto pt-7 px-7 bg-[#060D18] rounded-2xl shadow-md z-10 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam odit perspiciatis expedita cum
        officiis voluptatum cumque ex maxime veniam facilis quo, quas ea eos provident. Error sunt porro doloribus?
      </div>
      {/* <div className="flex">
        <div className="w-1/2 bg-slate-300">
          <Suspense fallback={<Loader />}>{info}</Suspense>
        </div>
        <div className="w-1/2 bg-blue-300">
          <Suspense fallback={<Loader />}>{videos}</Suspense>
        </div>
      </div> */}
    </div>
  );
}
