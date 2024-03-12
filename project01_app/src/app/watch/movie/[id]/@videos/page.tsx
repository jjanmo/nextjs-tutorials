import { getMovieVideos } from '@/apis/movies';
import { Suspense } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default async function MovieVideos({ params }: Props) {
  const data = await getMovieVideos({ id: Number(params.id) });

  return <div>{JSON.stringify(data)}</div>;
}
