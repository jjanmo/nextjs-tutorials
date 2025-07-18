import { PropsWithChildren } from 'react'
import SearchInput from '@/components/onebite/SearchInput'
import styles from '@/styles/modules/Layout.module.css'
import Link from 'next/link'

const OneBiteLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.oneBiteLayoutContainer}>
      <Link href="/one-bite">
        <h1 className={styles.oneBiteLayoutTitle}>📚 onebite books</h1>
      </Link>
      <SearchInput />
      {children}
    </div>
  )
}

export default OneBiteLayout
