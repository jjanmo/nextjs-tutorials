import React from 'react';
import { getPopularMovies } from '@/apis/movies';
import Movie from '@/components/Movie';

export default async function MoviesPage() {
  const popularMoviesData = await getPopularMovies({});
  const { results: movies } = popularMoviesData;

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center">
      <ul className="grid grid-cols-12 gap-4">
        {movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </ul>
    </div>
  );
}

// grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
