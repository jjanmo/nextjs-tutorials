import OneBiteLayout from '@/components/layouts/OneBiteLayout'

const OneBite = () => {
  return <div>This is OneBite Page</div>
}

export default OneBite

OneBite.getLayout = (page: React.ReactNode) => {
  return <OneBiteLayout>{page}</OneBiteLayout>
}
