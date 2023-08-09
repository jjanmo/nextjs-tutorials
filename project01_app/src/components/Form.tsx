export default function Form() {
  return (
    <form>
      <input type="number" placeholder="아바다 아이디" />
      <input type="text" placeholder="이름" />
      <input type="email" placeholder="이메일" />

      <div>
        <button>Cancel</button>
        <button>Create</button>
      </div>
    </form>
  );
}
