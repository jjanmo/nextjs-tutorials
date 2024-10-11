import Link from 'next/link'
import styles from '@/styles/modules/Common.module.css'

const NAVIGATION_MAP = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'One Bite',
    path: '/one-bite',
  },
]

const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navigationList}>
        {NAVIGATION_MAP.map(({ name, path }) => (
          <li key={path} className={styles.navigationItem}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
