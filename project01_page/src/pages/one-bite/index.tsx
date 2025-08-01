import OneBiteLayout from '@/components/layouts/OneBiteLayout'

const OneBite = () => {
  return <div></div>
}

export default OneBite

OneBite.getLayout = (page: React.ReactNode) => {
  return <OneBiteLayout>{page}</OneBiteLayout>
}
