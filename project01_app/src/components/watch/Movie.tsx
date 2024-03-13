'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Media } from '@/interface/movie';
import Badge from '../Badge';
import Bookmark from '../Bookmark';
import { BLUR_DATA_URL, TMDB_MOVIE_IMAGE_URL } from '@/constants/common';

export default function Movie(props: Media & { isMovie: boolean }) {
  const { id, poster_path, isMovie } = props;

  const badgeText = isMovie ? 'MOVIE' : 'TV';

  return (
    <li className="relative w-full pt-[150%] rounded-md shadow-md overflow-hidden">
      <Bookmark />
      <Link
        className="absolute top-0 left-0 w-full aspect-[2/3] active:opacity-80"
        href={`/watch/${isMovie ? 'movie' : 'tv'}/${id}`}
      >
        <Image
          src={`${TMDB_MOVIE_IMAGE_URL}/original/${poster_path})`}
          fill
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
          alt="movie poster"
          // sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
          priority
        />
        <Badge text={badgeText} />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000033] z-10" />
      </Link>
    </li>
  );
}
