import { MovieInfo } from '@/components/MovieInfo';
import { MovieVideos } from '@/components/MovieVideos';
import { Suspense } from 'react';

interface Props {
  params: { id: string };
  searchParams: { type: 'tv' | 'movie' };
}

export default async function DetailPage({ params, searchParams }: Props) {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <br />
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}
