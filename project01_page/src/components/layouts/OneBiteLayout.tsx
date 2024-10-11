import { PropsWithChildren } from 'react'
import SearchInput from '@/components/SearchInput'
import styles from '@/styles/modules/Layout.module.css'

const OneBiteLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.oneBiteLayoutContainer}>
      <h1 className={styles.oneBiteLayoutTitle}>📚 onebite books</h1>
      <SearchInput />
      {children}
    </div>
  )
}

export default OneBiteLayout
