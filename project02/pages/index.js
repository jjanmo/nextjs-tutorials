import { useCallback, useEffect, useState } from 'react';
import Movie from '../components/Movie';
import SEO from '../components/SEO';

export default function Home() {
  const [movies, setMovies] = useState(null);

  const fetchData = useCallback(async () => {
    const response = await fetch('/api/movies').then((res) => res.json());
    const _movies = response.results;
    setMovies(_movies);
  }, []);

  useEffect(async () => {
    fetchData();
  }, []);

  return (
    <>
      <SEO title="Home" />
      {!movies && <h1 className="loader">Loading...</h1>}
      <div className="container">
        {movies && movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      <style jsx>
        {`
          .loader {
            width: 95%;
            text-align: center;
          }
          .container {
            width: 95%;
            height: 95%;
            font-size: 15px;
            display: grid;
            grid-template-columns: repeat(4, 130px);
            row-gap: 10px;
            column-gap: 20px;
            margin: 10px auto;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
