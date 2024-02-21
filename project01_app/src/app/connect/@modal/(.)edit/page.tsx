import Form from '@/components/FormForEdit';
import Dim from '@/components/Dim';
import { redirect } from 'next/navigation';
import { BASE_URL, requestOptions } from '@/constants/fetch';
import { revalidatePath } from 'next/cache';
import { Connection } from '@/interface/connection';

export default async function EditPage({ searchParams }: { searchParams: { id: string } }) {
  const response = await fetch(`${BASE_URL}/api/connect/${searchParams.id}`, requestOptions);
  const data = (await response.json()) as Connection;

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

      <Form title="Edit Your Connection " />
    </div>
  );
}
