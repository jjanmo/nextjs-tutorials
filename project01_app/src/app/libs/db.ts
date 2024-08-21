import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const openDb = async () => {
  return open({
    filename: 'data.db',
    driver: sqlite3.Database,
  });
};

const setup = async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS connections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nickname TEXT,
      email TEXT,
      thumbnail INTEGER
    )
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS connections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nickname TEXT,
      email TEXT,
      thumbnail INTEGER
    )
  `);

  await db.close();
};

setup().catch((err) => console.error(err.message));
