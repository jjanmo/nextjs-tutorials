export interface Connection {
  id: number;
  nickname: string;
  email: string;
  thumbnail: number;
}

export type FormValues = Partial<Omit<Connection, 'id'>>;
