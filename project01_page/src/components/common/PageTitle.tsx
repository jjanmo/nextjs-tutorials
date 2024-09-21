import Head from 'next/head'

interface Props {
  title: string
}

const PageTitle = ({ title = '' }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Page Router App` : `Next Page Router App`}</title>
      </Head>
    </>
  )
}

export default PageTitle
