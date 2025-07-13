import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput/FormInput";
import styles from "./AuthForm.module.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill in both fields.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      alert("✅ Login successful!");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid credentials!");
    }
  };

  return (
    <div className={`container ${styles.authWrapper}`}>
      <div className={`p-4 shadow-sm ${styles.authCard}`}>
        <h3 className="mb-4 text-center text-primary">🔐 Login</h3>
        <form onSubmit={handleSubmit}>
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
            placeholder="Enter password"
          />
          <button className="btn btn-success w-100 mt-3" type="submit">
            Login
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="btn btn-outline-primary w-100 mt-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
