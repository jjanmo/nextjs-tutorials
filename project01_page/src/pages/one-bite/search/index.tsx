import { useRouter } from 'next/router'

const Search = () => {
  const { query } = useRouter()
  console.log(query)

  return <div>Search Page</div>
}
export default Search
