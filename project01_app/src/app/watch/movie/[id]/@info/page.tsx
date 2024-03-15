import { getMovieDetail } from '@/apis/movie';

interface Props {
  params: {
    id: string;
  };
}

export default async function MovieInfo({ params }: Props) {
  const data = await getMovieDetail({ id: Number(params.id) });

  return <div>{data.title}</div>;
}
