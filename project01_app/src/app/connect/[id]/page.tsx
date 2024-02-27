'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { THUMBNAIL_URL, dataKeyMap } from '@/constants/common';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteConnectData, getConnectDetailData } from '@/apis/connect';

interface Props {
  params: { id: string };
}

export default function ConnectDetailPage({ params }: Props) {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['connect', params.id],
    queryFn: () => getConnectDetailData(params.id),
    enabled: !!params.id,
  });

  const { mutate } = useMutation({
    mutationKey: ['connect', 'delete', params.id],
    mutationFn: () => deleteConnectData(params.id),
    onSuccess: () => {
      const queryClient = useQueryClient();
      queryClient.invalidateQueries({ queryKey: ['connect'] });
      router.push('/connect');
    },
  });

  const isThumbnail = (key: string) => key === 'thumbnail';

  const handleBackClick = () => {
    router.back();
  };

  const handleDeleteClick = async () => {
    const result = confirm('Are you sure you want to delete this connection?');

    if (result) mutate();
  };

  const handleEditClick = () => {
    router.push(`/connect/edit?id=${params.id}`);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="h-dvh flex flex-col justify-center items-center py-10">
      <div className="relative w-1/2 text-center">
        <h2 className="py-8 text-lg">
          <span className="text-sky-500 font-semibold text-3xl">{data?.nickname}</span> 's CONNECTION
        </h2>
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full hover:bg-slate-200 cursor-pointer"
          onClick={handleBackClick}
        >
          <ArrowLeft size={36} />
        </div>
      </div>
      <table className="w-1/2 text-xl">
        <tbody className="p-1">
          {data &&
            Object.entries(data).map(([key, value], i) => (
              <tr key={i} className="flex w-full mb-5">
                <td className="flex-none px-4 py-2 mr-2 bg-stone-200 rounded-md flex justify-center items-center">
                  {dataKeyMap[key]}
                </td>
                <td className="flex-3 flex justify-center items-center w-full py-4 bg-stone-100 rounded-md min-w-[300px]">
                  {isThumbnail(key) ? (
                    <Image
                      className="rounded-lg"
                      width={180}
                      height={180}
                      src={`${THUMBNAIL_URL}?img=${value}`}
                      alt="thumbnail"
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
      <div className="w-1/2 mt-6 mx-auto flex justify-center">
        <button
          className="w-32 py-2 mx-1 rounded-lg bg-emerald-400 text-white text-lg hover:opacity-90 transition-opacity"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="w-32 py-2 mx-1 rounded-lg bg-red-400 text-white text-lg hover:opacity-90 transition-opacity"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </section>
  );
}
