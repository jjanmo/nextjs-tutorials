import { getMovieVideos } from '@/apis/movies';

interface Props {
  id: string;
}

export async function MovieVideos({ id }: Props) {
  const data = await getMovieVideos({ id: Number(id) });

  return <h1>{JSON.stringify(data)}</h1>;
}
