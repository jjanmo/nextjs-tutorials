import { useState } from 'react'
import styles from '@/styles/OneBite.module.css'

const SearchInput = () => {
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
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles['search-input']}
        type="text"
        placeholder="검색어를 입력하세요"
        value={text}
        onChange={handleChange}
      />
      <button className={styles['search-button']} type="submit">
        검색
      </button>
    </form>
  )
}

export default SearchInput
