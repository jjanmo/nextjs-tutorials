import { useEffect, useState } from 'react'
import styles from '@/styles/modules/OneBite.module.css'
import { useRouter } from 'next/router'

const SearchInput = () => {
  const router = useRouter()
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setText(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text) return

    console.log(text)
    // 검색 API 호출
    // 검색 결과 페이지로 이동
    router.push(`/one-bite/search?q=${text}`)
  }

  useEffect(() => {
    const query = router.query.q as string
    if (!query) setText('')
    else setText(query)
  }, [router.query.q])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="검색어를 입력하세요"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.searchButton} type="submit">
        검색
      </button>
    </form>
  )
}

export default SearchInput
