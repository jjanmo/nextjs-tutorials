interface Props {
  onClose: () => void;
}

export default function Form({ onClose }: Props) {
  return (
    <form className="flex flex-col w-5/6 justify-around">
      <div className="h-1/2 w-full m-auto bg-green-500">
        <input className="w-full" type="number" placeholder="아바다 아이디" />
        <input className="w-full" type="text" placeholder="이름" />
        <input className="w-full" type="email" placeholder="이메일" />
      </div>

      <div className="w-full">
        <button type="button" className="w-1/2" onClick={onClose}>
          Cancel
        </button>
        <button className="w-1/2">Create</button>
      </div>
    </form>
  );
}
