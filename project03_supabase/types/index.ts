export type Note = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};
export type FormType = 'create' | 'edit' | 'read';