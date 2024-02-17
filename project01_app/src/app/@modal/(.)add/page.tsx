import Form from '@/app/_components/FormForAdd';
import Dim from '@/app/_components/Dim';

export default function AddPage() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center ">
      <Dim />

      <Form title="Add Your Connection" />
    </div>
  );
}
