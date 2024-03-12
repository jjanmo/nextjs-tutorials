'use client';

import { TMDB_MOVIE_IMAGE_URL } from '@/constants/common';
import { Media } from '@/interface/movie';
import Link from 'next/link';
import Badge from '../Badge';
import Bookmark from '../Bookmark';

export default function Movie(props: Media & { isMovie: boolean }) {
  const { id, poster_path, isMovie } = props;

  const badgeText = isMovie ? 'MOVIE' : 'TV';

  return (
    <li className="relative rounded-md shadow-md overflow-hidden">
      <Bookmark />
      <Link href={`/watch/${isMovie ? 'movie' : 'tv'}/${id}`}>
        <div
          style={{ '--bg-image': `url(${TMDB_MOVIE_IMAGE_URL}/original/${poster_path})` } as React.CSSProperties}
          className="bg-[image:var(--bg-image)] bg-cover bg-center w-full pt-[150%] object-contain active:opacity-50"
        ></div>
        <Badge text={badgeText} />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000033] z-10" />
      </Link>
    </li>
  );
}
