import React from 'react';
import { getPopularMovies, getPopularTVs } from '@/apis/movies';
import Movie from '@/components/Movie';
import { Media, Movie as MovieType } from '@/interface/movie';

export default async function MoviesPage() {
  const popularData = await Promise.all([getPopularMovies({}), getPopularTVs({})]).then((result) =>
    result.map((data) => data.results).flat()
  );
  popularData.sort((a, b) => b.popularity - a.popularity);

  const isMovie = (data: Media): data is MovieType => {
    return 'release_date' in data;
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center px-[10%] py-10">
      <ul className="w-full grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6">
        {popularData && popularData.map((movie) => <Movie key={movie.id} {...movie} isMovie={isMovie(movie)} />)}
      </ul>
    </div>
  );
}
