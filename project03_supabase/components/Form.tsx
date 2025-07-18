import * as styles from '@/styles/form.css';
import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { Note } from '@/types';

interface Props {
  note: Note | null;
}

const Form: FC<Props> = ({ note }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    setIsEdit(true);
    if (titleRef.current) {
      titleRef.current.focus();
    }
  };
  const handleSaveClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('save');
    setIsEdit(false);
  };
  const handleDeleteClick = () => {
    console.log('delete');
    // 리스트 삭제 처음 상황으로 돌아가기
    setIsEdit(false);
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    if (!note) return;

    setTitle(note.title);
    setDescription(note.description);
  }, [note]);

  return (
    <form className={styles.form} onSubmit={handleSaveClick}>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        placeholder="노트의 제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isEdit}
      />
      <textarea
        className={styles.textarea}
        placeholder="노트의 내용을 입력하세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        readOnly={!isEdit}
      />

      {!isEdit && (
        <button
          className={note ? styles.editButton : styles.disabledButton}
          type="button"
          onClick={handleEditClick}
          disabled={!note}
        >
          수정
        </button>
      )}
      {isEdit && (
        <div className={styles.buttonsContainer}>
          <button className={styles.deleteButton} type="button" onClick={handleDeleteClick}>
            삭제
          </button>
          <button className={styles.saveButton} type="submit">
            저장
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
