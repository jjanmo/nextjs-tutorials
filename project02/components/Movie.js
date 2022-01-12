export default function Movie(props) {
  console.log(props);
  return (
    <>
      <div className="container">
        <div>title</div>
        <div>content</div>
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          background: dodgerblue;
          width: 100%;
          height: 150px;
          background-image: url(https://image.tmdb.org/t/p/w500/${poster_path});
        }
      `}</style>
    </>
  );
}
