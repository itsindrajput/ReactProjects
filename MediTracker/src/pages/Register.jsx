import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully!");
    navigate("/");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Register</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button text="Register" />
      </form>
    </div>
  );
};

export default Register;
