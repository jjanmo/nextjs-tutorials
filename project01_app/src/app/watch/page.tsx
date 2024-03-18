import React from 'react';
import { getPopularMovies } from '@/apis/movie';
import { getPopularTVs } from '@/apis/tv';
import Movie from '@/components/watch/Movie';
import { Media, Movie as MovieType } from '@/interface/movie';

export default async function WatchPage() {
  const popularData = await Promise.all([getPopularMovies({}), getPopularTVs({})]).then((result) =>
    result.map((data) => data.results).flat()
  );
  popularData.sort((a, b) => b.popularity - a.popularity);

  const isMovie = (data: Media): data is MovieType => {
    return 'release_date' in data;
  };

  return (
    <div className="h-full flex flex-col items-center py-10">
      <ul
        className="grid 
          grid-cols-[repeat(4,minmax(100px,1fr))]
          sm:grid-cols-[repeat(5,minmax(100px,1fr))] 
          md:grid-cols-[repeat(5,minmax(140px,1fr))] 
          xl:grid-cols-[repeat(8,minmax(140px,1fr))]  
          gap-6"
      >
        {popularData && popularData.map((movie) => <Movie key={movie.id} {...movie} isMovie={isMovie(movie)} />)}
      </ul>
    </div>
  );
}
