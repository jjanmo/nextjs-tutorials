'use client';

import { Movie as MovieType } from '@/interface/movie';
import Link from 'next/link';

export default function Movie(props: MovieType) {
  const { title, backdrop_path, id } = props;
  console.log(title, backdrop_path);
  return (
    <li className="w-full h-full">
      <Link href={`/movies/${id}`}>
        <h1>{title}</h1>
      </Link>
    </li>
  );
}
