import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SEO from '../../components/SEO';

export default function Detail() {
  const router = useRouter();
  const [movie, setMovie] = useState(null);

  const fetchData = useCallback(async () => {
    const { id } = router.query;
    const response = await fetch(`/api/movies/${id}`).then((res) => res.json());
    const _movie = response;
    setMovie(_movie);
  }, []);

  useEffect(async () => {
    fetchData();
  }, []);

  console.log(movie);
  return (
    <>
      <SEO title={router.query.title || ''} />
      {movie ? (
        <>
          <div className="container">
            <div className="background"></div>
            <div className="poster" />
            <div className="info">
              <div>{movie?.original_title}</div>
              <div>{movie?.genres.map((g) => g.name).join('·')}</div>
              <div>{movie?.release_date}</div>
              <p>{movie?.overview}</p>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <style jsx>
        {`
          .container {
            width: 95%;
            height: 95%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }
          .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 96%;
            height: 96%;
            margin: 2% 2%;
            background-image: url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            filter: blur(10px);
          }
          .poster {
            z-index: 10;
            width: 40%;
            height: 100%;
            margin-right: 2%;
            background-image: url('https://image.tmdb.org/t/p/w500/${movie?.poster_path}');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 10px;
            overflow: hidden;
          }
          .info {
            z-index: 10;
            color: white;
          }
        `}
      </style>
      <div></div>
    </>
  );
}
