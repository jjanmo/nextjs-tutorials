import { useRouter } from 'next/router'
import OneBiteLayout from '@/components/layouts/OneBiteLayout'
import books from '@/mock/books.json'
import BookList from '@/components/onebite/BookList'

const Search = () => {
  const { query } = useRouter()
  console.log(query)

  return (
    <div>
      <BookList books={books} />
    </div>
  )
}
export default Search

Search.getLayout = (page: React.ReactNode) => {
  return <OneBiteLayout>{page}</OneBiteLayout>
}
