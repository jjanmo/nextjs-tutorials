import { getMovieDetail } from '@/apis/movie';

interface Props {
  id: string;
}

export async function MovieInfo({ id }: Props) {
  const data = await getMovieDetail({ id: Number(id) });

  return <h1>{JSON.stringify(data)}</h1>;
}
