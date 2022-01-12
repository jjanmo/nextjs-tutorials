import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import SEO from '../components/SEO';

export default function Home() {
  const [movies, setMovies] = useState(null);

  const fetchDate = async () => {
    const response = await fetch('/api/movies').then((res) => res.json());
    const movies = response.results;
    setMovies(movies);
  };

  useEffect(async () => {
    fetchDate();
  }, []);

  return (
    <>
      <SEO title="Home" />
      <div className="container">
        {!movies && <h1>Loading...</h1>}
        {movies && movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      <style jsx>
        {`
          .container {
            width: 95%;
            height: 95%;
            font-size: 15px;
            display: grid;
            grid-template-columns: repeat(4, 120px);
            row-gap: 10px;
            column-gap: 10px;
            margin: 0 auto;
            justify-content: center;
            overflow: auto;
            margin: 10px 0;
          }
        `}
      </style>
    </>
  );
}
