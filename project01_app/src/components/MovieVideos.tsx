import { getMovieVideos } from '@/apis/movie';

interface Props {
  id: string;
}

export async function MovieVideos({ id }: Props) {
  const data = await getMovieVideos({ id: Number(id) });

  return <h1>{JSON.stringify(data)}</h1>;
}
