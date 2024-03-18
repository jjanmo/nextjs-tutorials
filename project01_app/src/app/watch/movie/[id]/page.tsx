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
  const officialTrailer = videos?.find((video) => video.type === 'Trailer' && video.official);
  const backdropPath = data.backdrop_path;
  const title = data.title;

  return (
    <>
      {officialTrailer && <VideoTrailer officialTrailer={officialTrailer} backdropPath={backdropPath} title={title} />}
    </>
  );
}
