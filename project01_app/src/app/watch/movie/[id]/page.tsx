import { getMovieDetail } from '@/apis/movie';
import VideoTrailer from '@/components/watch/VideoTrailer';

interface Props {
  params: {
    id: string;
  };
}

export default async function MovieDetailPage({ params }: Props) {
  const data = await getMovieDetail({ id: Number(params.id) });

  const videos = data.videos?.results;
  const backdropPath = data.backdrop_path;
  const title = data.title;

  return <VideoTrailer backdropPath={backdropPath} title={title} videos={videos} />;
}
