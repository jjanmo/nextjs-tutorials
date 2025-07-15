'use client';

import * as styles from '@/styles/list.css';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'List Item 1',
  },
  {
    id: 2,
    title: 'List Item 2',
  },
  {
    id: 3,
    title: 'List Item 3',
  },
  {
    id: 4,
    title: 'List Item 4',
  },
  {
    id: 5,
    title: 'List Item 5',
  },
  {
    id: 6,
    title: 'List Item 6',
  },
  {
    id: 7,
    title: 'List Item 7',
  },
  {
    id: 8,
    title: 'List Item 8',
  },
  {
    id: 9,
    title: 'List Item 9',
  },
  {
    id: 10,
    title: 'List Item 10',
  },
];
const List = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}> + </button>
      </div>

      <ul className={styles.list}>
        {DUMMY_DATA.map((item) => (
          <li key={item.id} className={styles.item}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
