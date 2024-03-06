'use server';

import { postConnectData } from '@/apis/connect';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const submitForAdd = async (data: FormData) => {
  const body = {
    nickname: data.get('nickname'),
    email: data.get('email'),
    thumbnail: data.get('thumbnail'),
  };

  try {
    await postConnectData(body);
  } catch {
    console.error('error');
  } finally {
    revalidatePath('/connect');
    redirect('/connect');
  }
};
