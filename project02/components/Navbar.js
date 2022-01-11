import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={`${router.pathname === '/' ? 'active' : ''}`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={`l-border ${router.pathname === '/about' ? 'active' : ''}`}>About</a>
      </Link>
      <style jsx>
        {`
          nav {
            width: 90%;
            margin: 5px auto;
            border-radius: 5px;
            display: flex;
            color: white;
            font-size: 18px;
            overflow: hidden;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          a {
            width: 50%;
            text-align: center;
            padding: 5px 0;
            background: #2c3e50;
          }
          .active {
            background: black;
          }
          .l-border {
            border-left: 2px solid white;
          }
        `}
      </style>
    </nav>
  );
}
