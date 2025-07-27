'use client';

import * as styles from '@/styles/form.css';
import { type FC, type FormEvent, useEffect, useRef, useState } from 'react';
import type { FormType, Note } from '@/types';
import { createNote, deleteNote, patchNote } from '@/libs/supabase';

interface Props {
  note: Note | null;
  formType: FormType | null;
  onSaveAfter: (note: Note) => void;
  onEditAfter: (note: Note) => void;
  onDeleteAfter: VoidFunction;
}

const Form: FC<Props> = ({ note, formType, onSaveAfter, onEditAfter, onDeleteAfter }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);

  const handleCreateClick = async (e: FormEvent<HTMLFormElement>) => {
    if (!title || !content) return;
    e.preventDefault();

    const response = await createNote({ title, content });
    if (!response) {
      alert('노트 등록에 실패했습니다.');
      return;
    }
    onSaveAfter(response);
  };
  const handleSaveClick = async (e: FormEvent<HTMLFormElement>) => {
    if (!title || !content || !note) return;
    e.preventDefault();

    const response = await patchNote(note.id, { title, content });
    if (!response) {
      alert('노트 수정에 실패했습니다.');
      return;
    }

    onEditAfter(response);
  };
  const handleDeleteClick = async () => {
    if (!note) return;

    const response = await deleteNote(note.id);
    if (!response) {
      alert('노트 삭제에 실패했습니다.');
      return;
    }

    onDeleteAfter();
  };

  useEffect(() => {
    if (!note) return;

    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  useEffect(() => {
    if (formType === 'create') {
      setTitle('');
      setContent('');
      titleRef.current?.focus();
    }
  }, [formType]);

  return (
    <form className={styles.form} onSubmit={formType === 'create' ? handleCreateClick : handleSaveClick}>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        placeholder="노트의 제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        className={styles.textarea}
        placeholder="노트의 내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {formType === 'create' && (
        <button
          className={styles.button({
            type: 'save',
          })}
          type="submit"
        >
          등록
        </button>
      )}
      {formType === 'edit' && (
        <div className={styles.buttonsContainer}>
          <button
            className={styles.button({
              type: 'delete',
            })}
            type="button"
            onClick={handleDeleteClick}
          >
            삭제
          </button>
          <button className={styles.button({ type: 'save' })} type="submit">
            저장
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
