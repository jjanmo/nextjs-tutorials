import Image from 'next/image';
import SEO from '../components/SEO';
import movie from '../assets/movie.gif';

export default function About() {
  return (
    <>
      <SEO title="About" />
      <div className="container">
        <h1>This is Next Movie App</h1>
        <div className="section">
          <Image src={movie} alt="Movie" width={300} height={300} />
          <h3>
            Moive Data from <a href="https://www.themoviedb.org">TMBD</a>
          </h3>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
          }
          h1 {
            width: 90%;
            margin: 20px 0;
            padding: 15px 0;
            border-radius: 40px;
            background-color: white;
            text-align: center;
          }
          a {
            color: #f39c12;
          }
          .section {
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 30px;
            margin-top: 40px;
            padding: 40px 0;
            font-size: 20px;
          }
          Image {
            border: 10px solid #f9ca24;
          }
        `}
      </style>
    </>
  );
}
