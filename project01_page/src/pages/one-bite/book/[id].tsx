import { useRouter } from 'next/router'

const BookDetail = () => {
  const {
    query: { id },
  } = useRouter()
  return <div>Book Detail {`${id}`}</div>
}

export default BookDetail
