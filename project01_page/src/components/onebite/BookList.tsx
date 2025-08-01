import { Book } from '@/types/onebite'
import Image from 'next/image'
import styles from '@/styles/modules/OneBite.module.css'
import Link from 'next/link'

interface Props {
  books: Book[]
}

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <ul className={styles.bookList}>
      {books.map((book) => (
        <Link key={book.id} href={`/one-bite/book/${book.id}`}>
          <li className={styles.bookItem}>
            <div className={styles.imageWrapper}>
              <Image src={book.coverImgUrl} alt={book.title} fill priority sizes="100px" />
            </div>
            <div>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <h3 className={styles.bookSubTitle}>{book.subTitle}</h3>
              <div className={styles.bookDescription}>
                {book.author} | {book.publisher}
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default BookList
