'use client';

import { useState } from 'react';
import PlayIcon from '@/components/icons/PlayIcon';
import { MovieVideo } from '@/interface/movie';
import { TMDB_MOVIE_IMAGE_URL } from '@/constants/common';

interface Props {
  officialTrailer: MovieVideo;
  backdropPath: string;
  title: string;
}

export default function VideoTrailer({ officialTrailer, backdropPath, title }: Props) {
  const [showTrailer, setShowTrailer] = useState(false);

  const handlePlayButtonClick = () => {
    setShowTrailer(true);
  };

  return (
    <div className="relative w-full">
      <div
        style={{ '--backdrop-image': `url('${TMDB_MOVIE_IMAGE_URL}/original${backdropPath}')` } as React.CSSProperties}
        className={`relative w-full h-[450px] bg-[image:var(--backdrop-image)] bg-cover bg-center 
        before:backdrop-filter before:absolute before:w-full before:h-full`}
      >
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.15]"
          onClick={handlePlayButtonClick}
        >
          <PlayIcon />
        </button>
      </div>
      {showTrailer && (
        <div className="absolute top-0 left-0 w-full h-[360px]">
          <div className="relative max-w-[1120px] h-full mx-auto">
            <iframe
              className="absolute top-0 left-0 w-full h-full mx-auto"
              src={`https://www.youtube.com/embed/${officialTrailer.key}`}
              title={officialTrailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
