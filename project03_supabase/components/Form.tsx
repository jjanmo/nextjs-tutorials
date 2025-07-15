import * as styles from '@/styles/form.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="노트의 제목을 입력하세요" />
      <textarea className={styles.textarea} placeholder="노트의 내용을 입력하세요" />
      <button className={styles.button} type="submit">
        저장
      </button>
    </form>
  );
};

export default Form;
