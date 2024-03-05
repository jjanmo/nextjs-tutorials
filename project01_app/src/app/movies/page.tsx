import { getPopularMovies } from '@/apis/movies';
import React from 'react';

export default async function MoviesPage() {
  const popularMoviesData = await getPopularMovies({});
  const { results: movies } = popularMoviesData;
  console.log(movies);
  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>{movies && movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}</ul>
    </div>
  );
}
