'use client';

import { read } from '@/helper/fetch';
import { Connection } from '@/interface/connection';
import { AVATAR_URL, dataKeyMap } from '@/constants/common';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function ConnectDetailPage({ params }: Props) {
  const router = useRouter();
  const response = await read({ url: `/api/connect/${params.id}` });
  const data = (await response.json()) as Connection;

  const isAvatar = (key: string) => key === 'avatarId';

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className="h-dvh flex flex-col justify-center items-center">
      <table className="w-1/2 mt-10 text-xl">
        <tbody className="p-1">
          {Object.entries(data).map(([key, value], i) => (
            <tr key={i} className="flex w-full mb-5">
              <td className="flex-none px-4 py-2 mr-2 bg-stone-200 rounded-md flex justify-center items-center">
                {dataKeyMap[key]}
              </td>
              <td className="flex-3 flex justify-center items-center w-full py-4 bg-stone-100 rounded-md min-w-[300px]">
                {isAvatar(key) ? (
                  <Image
                    className="rounded-lg"
                    width={180}
                    height={180}
                    src={`${AVATAR_URL}?img=${value}`}
                    alt="avatar"
                    priority
                  />
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <button
          className="w-32 py-2 mx-2 rounded-lg bg-red-400 text-white text-lg hover:opacity-90 transition-opacity"
          onClick={handleBackClick}
        >
          Back
        </button>
        <button className="w-32 py-2 mx-2 rounded-lg bg-blue-400 text-white text-lg hover:opacity-90 transition-opacity">
          Edit
        </button>
      </div>
    </section>
  );
}
