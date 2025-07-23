'use client';

import * as styles from '@/styles/list.css';
import type { Note } from '@/types';
import { type FC } from 'react';

interface Props {
  notes: Note[];
  activeNote: Note | null;
  onNoteClick: (note: Note) => void;
  onEnterToCreateMode: () => void;
}

const List: FC<Props> = ({ notes, activeNote, onNoteClick, onEnterToCreateMode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onEnterToCreateMode}>
          {' + '}
        </button>
      </div>

      <ul className={styles.list}>
        {notes.map((note) => {
          const { id, title } = note;
          return (
            <li key={id} className={styles.item({ active: activeNote?.id === id })} onClick={() => onNoteClick(note)}>
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
