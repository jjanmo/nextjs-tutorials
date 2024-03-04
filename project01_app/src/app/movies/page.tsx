'use client';

import { Movie } from '@/interface/movie';
import React, { useEffect, useState } from 'react';

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN,
  },
};

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular', options);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>{movies && movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}</ul>
    </div>
  );
}
