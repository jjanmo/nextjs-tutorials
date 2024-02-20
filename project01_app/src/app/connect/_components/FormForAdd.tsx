import ModalButtons from './ModalButtons';
import { submitForAdd } from '../actions';

interface Props {
  title: string;
}

export default function Form({ title }: Props) {
  return (
    <div className="flex flex-col w-1/4 justify-around items-center bg-white z-10 pt-2 pb-6 px-6 rounded-md">
      {title && <h1 className="my-4 text-xl">{title}</h1>}
      <form className="flex flex-col w-full justify-around items-center" action={submitForAdd}>
        <div className="flex-col">
          <input
            className="w-full border-2 border-gray-300 rounded-md mb-5 p-2"
            type="text"
            placeholder="닉네임을 입력하세요"
            name="nickname"
            required
          />
          <input
            className="w-full border-2 border-gray-300 rounded-md mb-5 p-2"
            type="email"
            placeholder="이메일을 입력하세요"
            name="email"
            required
          />
          <input
            className="w-full border-2 border-gray-300 rounded-md mb-5 p-2"
            type="number"
            min="1"
            max="70"
            placeholder="아바타 아이디(1~70)를 선택하세요"
            name="thumbnail"
            required
          />
        </div>

        <ModalButtons mode="add" />
      </form>
    </div>
  );
}
