import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { FC, ReactElement, ReactNode } from 'react'
import GlobalLayout from '@/components/layouts/GlobalLayout'
import '@/styles/globals.css'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
}

export default App
