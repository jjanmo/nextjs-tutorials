import { useRouter } from 'next/router'

const BookDetail = () => {
  const {
    query: { id },
  } = useRouter()
  console.log(id)
  return <div>Book Detail</div>
}

export default BookDetail
