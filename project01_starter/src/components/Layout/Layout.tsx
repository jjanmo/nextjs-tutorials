import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* <header className={styles.header}>
        {home ? (
          <>
            <Image
              src={profile}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
              width={100}
              height={100}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  src={profile}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                  width={100}
                  height={100}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
      <main>{children}</main>
    </div>
  );
}
