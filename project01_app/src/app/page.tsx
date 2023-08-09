import { AVATAR_URL } from '@/constants/common';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const connections = [
    {
      id: 1,
      name: 'Iosue Margareta',
      avatarId: 10,
      email: 'iosue00@connect.com',
    },
    {
      id: 2,
      name: 'Urban Kristine',
      avatarId: 20,
      email: 'kristine@connect.com',
    },
    {
      id: 3,
      name: 'Damjana Adhiambo',
      avatarId: 30,
      email: 'adhiambo@connect.com',
    },
    {
      id: 4,
      name: 'aaaa',
      avatarId: 40,
      email: 'aaa@connect.com',
    },
    {
      id: 5,
      name: 'bbbb',
      avatarId: 50,
      email: 'bbbb@connect.com',
    },
  ];

  return (
    <div className="w-9/12 pt-10 mx-auto">
      <h1 className="text-3xl uppercase text-center text-slate-300 mb-10">
        This will be your hyper connect!
      </h1>

      <section>
        <ul className="grid grid-cols-5 gap-5 row-auto">
          {connections.map(({ id, avatarId, name }) => (
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
              <div className="text-center">{name}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
