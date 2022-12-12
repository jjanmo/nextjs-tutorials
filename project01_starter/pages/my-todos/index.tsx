import * as styles from './todos';

export default function MyTodos() {
  const todos = [
    {
      id: 1,
      content: '자바스크립트 공부',
      timestamp: new Date(),
      status: 'active',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>My Todos</h1>
      <form>
        <input type="text" placeholder="todo 입력" />
      </form>
      <ul style={styles.todos}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" id={todo.content} style={styles.checkbox} />
            <label htmlFor={todo.content}>{todo.content}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
