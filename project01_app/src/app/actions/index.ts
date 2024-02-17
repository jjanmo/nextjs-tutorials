'use server';

import { BASE_URL, requestOptions } from '@/constants/fetch';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const submitForAdd = async (formData: FormData) => {
  const body = {
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    thumbnail: Number(formData.get('thumbnail')),
  };

  try {
    await fetch(`${BASE_URL}/api/connect`, {
      method: 'POST',
      ...requestOptions,
      body: JSON.stringify(body),
    });
  } catch {
    console.error('error');
  } finally {
    revalidatePath('/');
    redirect('/');
  }
};
