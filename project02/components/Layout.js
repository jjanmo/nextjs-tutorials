export default function Layout({ children, type }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          width: 40vw;
          height: ${type === 'Detail' ? '95vh' : 'auto'};
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background: #f9ca24;
          padding: 20px 10px;
          border-radius: 10px;
          margin: 2vh auto;
        }
      `}</style>
    </>
  );
}
