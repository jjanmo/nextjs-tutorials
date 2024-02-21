import Form from '@/components/FormForAdd';
import Dim from '@/components/Dim';
import { BASE_URL, requestOptions } from '@/constants/fetch';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function EditPage() {
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

      <Form title="Edit Your Connection " action={submit} />
    </div>
  );
}
