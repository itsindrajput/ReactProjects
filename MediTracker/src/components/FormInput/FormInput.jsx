import styles from "./FormInput.module.css";

const FormInput = ({ label, type, name, value, onChange, placeholder }) => (
  <div className={`mb-4 ${styles.inputGroup}`}>
    <label className={`form-label ${styles.label}`}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${styles.input}`}
      required
    />
  </div>
);

export default FormInput;
