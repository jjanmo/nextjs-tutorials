import { PropsWithChildren } from 'react'
import styles from '@/styles/Layout.module.css'

const OneBiteLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles['one-bite-container']}>{children}</div>
}

export default OneBiteLayout
