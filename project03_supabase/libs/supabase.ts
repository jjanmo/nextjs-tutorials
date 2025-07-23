import type { Database } from '@/database.types';
import type { Note } from '@/types';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const getNotes = async () => {
  try {
    const { data: notes } = await supabase.from('note').select('*');
    return notes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createNote = async (note: Pick<Note, 'title' | 'content'>) => {
  try {
    const { data, error } = await supabase.from('note').insert(note).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const patchNote = async (id: number, note: Pick<Note, 'title' | 'content'>) => {
  try {
    const { data, error } = await supabase.from('note').update(note).eq('id', id).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteNote = async (id: number) => {
  try {
    const { error } = await supabase.from('note').delete().eq('id', id);
    if (error) throw error;
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};
