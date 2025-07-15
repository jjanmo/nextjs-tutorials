'use client';

import { useState } from 'react';
import List from './List';
import Form from './Form';
import { Note } from '@/types';

const Section = () => {
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const handleClick = (id: Note) => {
    setCurrentNote(id);
  };

  return (
    <>
      <List onNoteClick={handleClick} />
      <Form note={currentNote} />
    </>
  );
};

export default Section;
