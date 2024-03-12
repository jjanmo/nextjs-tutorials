import { getMovieDetail } from '@/apis/movies';
import { Suspense } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default async function MovieInfo({ params }: Props) {
  const data = await getMovieDetail({ id: Number(params.id) });

  return <div>{JSON.stringify(data)}</div>;
}
