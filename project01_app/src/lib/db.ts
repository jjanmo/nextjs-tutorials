import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export const openDb = async () => {
  return open({
    filename: ':memory',
    driver: sqlite3.Database,
  });
};
// const db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
//   console.log('before create');
//   // Error handling for connection
//   if (err) {
//     return console.error(err.message);
//   } else {
//     // Success message for successful connection
//     console.log('Connected to the SQLite database.');
//   }
// });

// db.exec(
//   `
// CREATE TABLE IF NOT EXISTS connections (
//   id INTEGER PRIMARY KEY AUTOINCREMENT
//   nickname TEXT
//   email TEXT
//   avatarId INTEGER
// )
// `,
//   (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Created todo table');
//   }
// );

// db.serialize(() => {
//   db.exec(
//     `
//   CREATE TABLE IF NOT EXISTS connections (
//     id INTEGER PRIMARY KEY AUTOINCREMENT
//     nickname TEXT
//     email TEXT
//     avatarId INTEGER
//   )
//   `,
//     (err) => {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log('Created todo table');
//     }
//   );

//   const value1 = ['Buy groceries'];
//   const value2 = ['Walk Sam'];
//   const value3 = ['Fold laundry'];
//   const value4 = ['Workout'];

//   // SQL command for insertion

//   // db.close();
// });

export const setup = async () => {
  const db = await openDb();
  await db.exec(`
  CREATE TABLE IF NOT EXISTS connections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nickname TEXT,
    email TEXT,
    avatarId INTEGER
  )
  `);

  await db.run(
    'INSERT INTO connections (nickname, email, avatarId) VALUES (?, ?, ?)',
    '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    'jjanmo',
    20
  );

  await db.close();
};

setup().catch((err) => console.error(err.message));
