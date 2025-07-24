import { PropsWithChildren } from 'react'
import Navigation from '@/components/common/Navigation'
import Footer from '../common/Footer'

const GlobalLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
export default GlobalLayout
