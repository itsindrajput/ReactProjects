import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";
import FormInput from "../components/FormInput/FormInput";
import styles from "./AuthForm.module.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("✅ Registration successful!");
    navigate("/dashboard");
  };

  return (
    <div className={`container ${styles.authWrapper}`}>
      <div className={`p-4 shadow-sm ${styles.authCard}`}>
        <h3 className="text-center text-primary mb-4 d-flex justify-content-center align-items-center gap-2">
          <FaRegAddressCard size={26} /> <span>Register</span>
        </h3>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
          />
          <button className="btn btn-primary w-100 mt-3" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
