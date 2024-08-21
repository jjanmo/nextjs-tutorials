'use client';

import { useState } from 'react';
import Image from 'next/image';
import PlayIcon from '@/components/icons/PlayIcon';
import { MovieVideo } from '@/interface/movie';
import { BLUR_DATA_URL, TMDB_MOVIE_IMAGE_URL } from '@/constants/common';

interface Props {
  videos?: MovieVideo[];
  backdropPath: string;
  title: string;
}

export default function VideoTrailer({ backdropPath, title, videos }: Props) {
  const [showTrailer, setShowTrailer] = useState(false);

  // TODO 어떤 비디오를 보여줄지 정해야함(메인 비디오의 기준은?) & 없다면 무엇을 보여주면 될까?
  const mainVideo = videos?.[0];

  const handlePlayButtonClick = () => {
    setShowTrailer(true);
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[450px]">
        <Image
          className={`object-cover w-full h-full filter brightness-50 grayscale-50 ${showTrailer && 'blur-[2px]'}`}
          src={`${TMDB_MOVIE_IMAGE_URL}/original${backdropPath}')`}
          alt={`${title}_backdrop`}
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
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
              src={`https://www.youtube.com/embed/${mainVideo?.key || ''}?autoplay=1&mute=1`}
              title={mainVideo?.name || 'movie_trailer'}
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
