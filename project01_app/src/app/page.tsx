import { AVATAR_URL } from '@/constants/common';
import Image from 'next/image';
import Link from 'next/link';
import { read } from '@/helper/fetch';
import { Connection } from '@/interface/connection';

export default async function Home() {
  const response = await read({ url: '/api/connections' });
  const data = (await response.json()) as Connection[];

  return (
    <div className="w-9/12 pt-10 mx-auto">
      <h1 className="text-3xl uppercase text-center text-slate-300 mb-10">This will be your hyper connect!</h1>
      <section>
        <ul className="grid grid-cols-5 gap-5 row-auto">
          {data.map(({ id, avatarId, nickname }) => (
            <li key={id} className="flex justify-center items-center flex-col">
              <Link href={`/connect/${id}`}>
                <Image
                  className="rounded-lg"
                  width={180}
                  height={180}
                  src={`${AVATAR_URL}?img=${avatarId}`}
                  alt="avatar"
                />
              </Link>
              <div className="text-center">{nickname}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
