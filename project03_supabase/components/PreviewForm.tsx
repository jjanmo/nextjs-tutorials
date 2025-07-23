'use client';

import * as styles from '@/styles/form.css';
import type { FC } from 'react';
import type { Note } from '@/types';

interface Props {
  note: Note;
  onEnterToEditMode: VoidFunction;
}

const PreviewForm: FC<Props> = ({ note, onEnterToEditMode }) => {
  const { title, content } = note;

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" value={title} readOnly />
      <textarea className={styles.textarea} value={content} readOnly />

      <button
        className={styles.button({
          type: 'edit',
        })}
        type="button"
        onClick={onEnterToEditMode}
      >
        수정
      </button>
    </form>
  );
};

export default PreviewForm;
