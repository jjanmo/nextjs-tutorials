import Link from 'next/link'
import styles from '@/styles/Navigation.module.css'

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
    <nav className={styles.container}>
      <ul className={styles.list}>
        {NAVIGATION_MAP.map(({ name, path }) => (
          <li key={path} className={styles.item}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
