'use client';

import * as styles from '@/styles/list.css';
import { Note } from '@/types';
import { FC } from 'react';

const DUMMY_DATA: Note[] = [
  {
    id: 1,
    title: 'List Item 1',
    description: 'List Item 1 Description',
  },
  {
    id: 2,
    title: 'List Item 2',
    description: 'List Item 2 Description',
  },
  {
    id: 3,
    title: 'List Item 3',
    description: 'List Item 3 Description',
  },
  {
    id: 4,
    title: 'List Item 4',
    description: 'List Item 4 Description',
  },
  {
    id: 5,
    title: 'List Item 5',
    description: 'List Item 5 Description',
  },
  {
    id: 6,
    title: 'List Item 6',
    description: 'List Item 6 Description',
  },
  {
    id: 7,
    title: 'List Item 7',
    description: 'List Item 7 Description',
  },
  {
    id: 8,
    title: 'List Item 8',
    description: 'List Item 8 Description',
  },
  {
    id: 9,
    title: 'List Item 9',
    description: 'List Item 9 Description',
  },
  {
    id: 10,
    title: 'List Item 10',
    description: 'List Item 10 Description',
  },
];

interface Props {
  onNoteClick: (note: Note) => void;
}

const List: FC<Props> = ({ onNoteClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}> + </button>
      </div>

      <ul className={styles.list}>
        {DUMMY_DATA.map((item) => (
          <li key={item.id} className={styles.item} onClick={() => onNoteClick(item)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
