import React, { useCallback, useEffect, useRef, useState } from 'react';
import Movie from '../components/Movie';
import SEO from '../components/SEO';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

export default function Home() {
  const [page, setPage] = useState(1);

  const { movies, isLoading, error, hasMore } = useFetch(page);

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <>
      <SEO title="Home" />
      <div className="container">
        {movies && movies.length > 0 && movies.map((movie, index) => <Movie key={movie.id} {...movie} />)}
        {isLoading && (
          <div className="loader">
            <Loader />
          </div>
        )}
        {error && <h1>Error!!</h1>}
      </div>
      <div ref={lastElement}></div>
      <style jsx>
        {`
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
          .loader {
            width: 100%;
            text-align: center;
            margin: 10px 0;
          }
        `}
      </style>
    </>
  );
}
