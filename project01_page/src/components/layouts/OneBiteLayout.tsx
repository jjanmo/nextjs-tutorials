import { PropsWithChildren } from 'react'
import SearchInput from '@/components/SearchInput'
import styles from '@/styles/OneBite.module.css'

const OneBiteLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📚 onebite books</h1>
      <SearchInput />
      {children}
    </div>
  )
}

export default OneBiteLayout
