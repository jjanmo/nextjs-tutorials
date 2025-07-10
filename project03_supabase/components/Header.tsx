'use client';

import * as styles from '@/styles/header.css';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/images/logo.png" alt="logo" width={32} height={32} />
        <div>SupaNext</div>
      </div>
    </header>
  );
};
