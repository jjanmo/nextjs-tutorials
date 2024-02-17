import Form from '@/app/_components/Form';
import Dim from '@/app/_components/Dim';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { BASE_URL, requestOptions } from '@/constants/fetch';

export default function AddPage() {
  const submit = async (formData: FormData) => {
    'use server';

    try {
      await fetch(`${BASE_URL}/api/connect`, {
        method: 'POST',
        ...requestOptions,
        body: JSON.stringify(formData),
      });
    } catch {
      console.error('error');
    } finally {
      revalidatePath('/');
      redirect('/');
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center ">
      <Dim />

      <Form title="Add Your Connection" action={submit} />
    </div>
  );
}
