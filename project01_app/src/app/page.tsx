import { THUMBNAIL_URL } from '@/constants/common';
import Image from 'next/image';
import Link from 'next/link';
import { read } from '@/helper/fetch';
import { Connection } from '@/interface/connection';

export default async function Home() {
  const response = await read({ url: '/api/connect' });
  const data = (await response.json()) as Connection[];

  return (
    <div className="min-w-[500px] max-w-[1000px] px-6 mx-auto">
      {data?.length > 0 ? (
        <section className="min-h-[calc(100vh-5rem)]">
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
                  />
                </Link>
                <div className="text-center">{nickname}</div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="min-h-[calc(100vh-5rem)] flex justify-center items-center">
          <h1 className="text-3xl uppercase text-center text-slate-300 pb-60">This will be your hyper connect!</h1>
        </section>
      )}
    </div>
  );
}
