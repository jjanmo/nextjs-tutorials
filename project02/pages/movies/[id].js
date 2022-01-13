import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import logo from '../../assets/imdb-logo.png';

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

  return (
    <>
      <SEO title={router.query.title || ''} />
      {movie ? (
        <>
          <div className="container">
            <div className="background"></div>
            <div className="poster" />
            <div className="info">
              <h1>{movie?.original_title}</h1>
              <p className="header">
                <div>{movie?.genres?.map((g) => g.name).join(' · ')}</div>
                <div>{movie?.release_date}</div>
                <Link href={`https://www.imdb.com/title/${movie?.imdb_id}/`}>
                  <a target="_blank">
                    <Image src={logo} alt="logo" width={50} height={20} />
                  </a>
                </Link>
              </p>
              <p className="overview">{movie?.overview}</p>
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
            padding-top: 6vh;
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
            width: 300px;
            height: 450px;
            background-image: url('https://image.tmdb.org/t/p/w500/${movie?.poster_path}');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 10px;
            overflow: hidden;
          }
          .info {
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
          }
          .info h1 {
            all: unset;
            width: 75%;
            margin-botton: 0;
            font-size: 2rem;
            margin: 20px 0 5px;
          }
          .info .header {
            display: flex;
            width: 90%;
            justify-content: flex-end;
            margin-bottom: 20px;
          }
          .info .header > * {
            margin-right: 10px;
          }
          .info .overview {
            width: 75%;
            white-space: pre-wrap;
            word-break: break-all;
          }
        `}
      </style>
    </>
  );
}
