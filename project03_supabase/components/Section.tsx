'use client';

import { useEffect, useState } from 'react';
import List from './List';
import type { FormType, Note } from '@/types';
import EmptySection from './Empty';
import PreviewForm from './PreviewForm';
import Form from './Form';
import { getNotes } from '@/libs/supabase';

const Section = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [formType, setFormType] = useState<FormType | null>(null);

  const handleNoteClick = (note: Note) => {
    setActiveNote(note);
    setFormType('read');
  };
  const handleEnterToCreateMode = () => {
    setActiveNote(null);
    setFormType('create');
  };
  const handleEnterToEditMode = () => {
    setFormType('edit');
  };
  const handleSaveAfter = (note: Note) => {
    setNotes((prev) => [...prev, note]);
    setActiveNote(note);
    setFormType('read');
  };
  const handleEditAfter = (note: Note) => {
    setActiveNote(note);
    setFormType('read');
    getNotes().then((notes) => {
      setNotes(notes || []);
    });
  };
  const handleDeleteAfter = () => {
    getNotes().then((notes) => {
      setNotes(notes || []);
    });
    setActiveNote(null);
    setFormType(null);
  };

  useEffect(() => {
    getNotes().then((notes) => {
      setNotes(notes || []);
    });
  }, []);

  return (
    <>
      <List
        notes={notes}
        activeNote={activeNote}
        onNoteClick={handleNoteClick}
        onEnterToCreateMode={handleEnterToCreateMode}
      />
      {!activeNote && !formType && <EmptySection />}
      {(formType === 'create' || formType === 'edit') && (
        <Form note={activeNote} formType={formType} onSaveAfter={handleSaveAfter} onEditAfter={handleEditAfter} onDeleteAfter={handleDeleteAfter} />
      )}
      {formType === 'read' && activeNote && <PreviewForm note={activeNote} onEnterToEditMode={handleEnterToEditMode} />}
    </>
  );
};

export default Section;
