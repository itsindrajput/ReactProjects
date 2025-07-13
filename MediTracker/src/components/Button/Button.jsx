import styles from "./Button.module.css";

const Button = ({ text, onClick, type = "submit" }) => (
  <button type={type} onClick={onClick} className={styles.btn}>
    {text}
  </button>
);
export default Button;
