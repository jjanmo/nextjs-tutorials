import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
      </div>
    </div>
  );
};

export default Counter;
