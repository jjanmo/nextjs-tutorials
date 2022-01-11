import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          width: 600px;
          height: 700px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background: #f9ca24;
          padding: 20px 10px;
          border-radius: 10px;
          overflow: hidden;
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -30%);
        }
      `}</style>
    </>
  );
}
