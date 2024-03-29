'use client';

import { getConnectData } from '@/apis/connect';
import { BLUR_DATA_URL, THUMBNAIL_URL } from '@/constants/common';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

export default function ConnectList() {
  const { data } = useQuery({
    queryKey: ['connect'],
    queryFn: getConnectData,
  });

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center">
      {data && data.length > 0 ? (
        <ul className="grid grid-cols-5 gap-5 row-auto  py-10">
          {data.map(({ id, nickname, thumbnail }) => (
            <li key={id} className="flex justify-center items-center flex-col hover:scale-105 transition-all">
              <Link href={`/connect/${id}`}>
                <Image
                  className="rounded-lg"
                  width={180}
                  height={180}
                  src={`${THUMBNAIL_URL}?img=${thumbnail}`}
                  alt="thumbnail"
                  priority
                  blurDataURL={BLUR_DATA_URL}
                  placeholder="blur"
                />
              </Link>
              <div className="text-center">{nickname}</div>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-3xl uppercase text-center text-slate-300 py-40">This will be your hyper connect!</h1>
      )}
      <div className="w-fit text-2xl bg-emerald-500 py-2 px-4 rounded-md text-white h-full flex items-center uppercase hover:opacity-80 transition-all">
        <Link href="/connect/add">Add</Link>
      </div>
    </section>
  );
}
