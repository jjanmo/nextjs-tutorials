interface Props {
  title?: string;
  onClose: () => void;
}

export default function Form({ title, onClose }: Props) {
  return (
    <div className="flex flex-col w-1/4 justify-around items-center bg-white z-10 pt-2 pb-6 px-6 rounded-md">
      {title && <h1 className="my-4 text-xl">{title}</h1>}
      <form className="flex flex-col w-full justify-around items-center">
        <div className="flex-col">
          <input
            className="w-full border-2 border-gray-300 rounded-md mb-5 p-2"
            type="text"
            placeholder="닉네임을 입력하세요"
          />
          <input
            className="w-full border-2 border-gray-300 rounded-md mb-5 p-2"
            type="email"
            placeholder="이메일을 입력하세요"
          />
          <input
            className="w-full border-2 border-gray-300 rounded-md mb-5 p-2"
            type="number"
            min="1"
            max="70"
            placeholder="아바타 아이디(1~70)를 선택하세요"
          />
        </div>

        <div className="w-full flex justify-between mt-4">
          <button type="button" className="w-1/2 bg-red-400 text-white p-2 rounded-s-lg" onClick={onClose}>
            Cancel
          </button>
          <button className="w-1/2 bg-emerald-400 text-white p-2 rounded-e-lg">Create</button>
        </div>
      </form>
    </div>
  );
}
