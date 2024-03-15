import { getMovieVideos } from '@/apis/movie';

interface Props {
  params: {
    id: string;
  };
}

export default async function MovieVideos({ params }: Props) {
  const data = await getMovieVideos({ id: Number(params.id) });

  return <div>{data.id}</div>;
}
