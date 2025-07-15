import * as styles from '@/styles/form.css';
import { FC, useState } from 'react';
import { Note } from '@/types';

interface Props {
  note: Note | null;
}

const Form: FC<Props> = ({ note }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [description, setDescription] = useState(note?.description || '');

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="노트의 제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder="노트의 내용을 입력하세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {note && (
        <button className={styles.button} type="button">
          수정
        </button>
      )}
      {!note && (
        <div className={styles.buttonsContainer}>
          <button className={styles.button} type="button">
            삭제
          </button>
          <button className={styles.button} type="submit">
            저장
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
