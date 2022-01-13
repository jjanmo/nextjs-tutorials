import { useCallback } from 'react';
import { useRouter } from 'next/router';

export default function Movie(props) {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(
      {
        pathname: `/movies/${props.id}`,
        query: {
          title: props.original_title,
        },
      },
      `/movies/${props.id}`
    );
  }, []);

  return (
    <div className="container" onClick={onClick}>
      <div className="poster"></div>
      <div className="title">{props.original_title}</div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 195px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background-color: #8a8a8a;
          opacity: 0.5;
          transition: all 0.3s ease-in-out;
        }
        .container:hover::before {
          width: 0;
        }
        .container::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background-color: #8a8a8a;
          opacity: 0.5;
          transition: all 0.3s ease-in-out;
        }
        .container:hover::after {
          width: 0;
        }
        .poster {
          width: 100%;
          height: 195px;
          background-repeat: no-repeat;
          background-image: url('https://image.tmdb.org/t/p/w500/${props.poster_path}');
          background-size: contain;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .title {
          position: absolute;
          color: white;
          font-weight: bold;
          width: 95%;
          text-align: center;
          z-index: 10;
          transition: opacity 0.3s ease-in-out;
          word-break: break-word;
        }
        .container:hover .title {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
