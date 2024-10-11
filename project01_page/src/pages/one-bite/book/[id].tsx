import { useRouter } from 'next/router'
import BookDetailLayout from '@/components/layouts/BookDetailLayout'

const BookDetail = () => {
  const {
    query: { id },
  } = useRouter()
  return <div>Book Detail {`${id}`}</div>
}

export default BookDetail

BookDetail.getLayout = (page: React.ReactNode) => {
  return <BookDetailLayout>{page}</BookDetailLayout>
}
