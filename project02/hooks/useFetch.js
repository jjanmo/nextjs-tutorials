import { useEffect, useState } from 'react';

export default function useFetch(page) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setHasMore(page < res.total_pages);
        setMovies((prev) => [...prev, ...res.results]);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return { movies, isLoading, error, hasMore };
}
