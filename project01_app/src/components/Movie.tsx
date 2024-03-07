'use client';

import { isMovie } from '@/app/movies/page';
import { TMDB_MOVIE_IMAGE_URL } from '@/constants/common';
import { Media } from '@/interface/movie';
import Link from 'next/link';
import Badge from './Badge';
import Bookmark from './Bookmark';

export default function Movie(props: Media) {
  const { id, poster_path } = props;

  const badgeText = isMovie(props) ? 'MOVIE' : 'TV';

  return (
    <li className="relative rounded-md shadow-md overflow-hidden">
      <Link href={`/movies/${id}`}>
        <Bookmark />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000033]" />
        <div
          style={{ '--bg-image': `url(${TMDB_MOVIE_IMAGE_URL}/original/${poster_path})` } as React.CSSProperties}
          className="bg-[image:var(--bg-image)] bg-cover bg-center w-full pt-[150%] object-contain "
        ></div>
        <Badge text={badgeText} />
      </Link>
    </li>
  );
}
