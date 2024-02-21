import Form from '@/components/FormForAdd';
import Dim from '@/components/Dim';

export default function AddPage() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center ">
      <Dim />

      <Form title="Add Your Connection" />
    </div>
  );
}
