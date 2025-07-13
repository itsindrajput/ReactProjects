import { useState } from "react";
import styles from "./BookAppointment.module.css";
import { FaCalendarPlus } from "react-icons/fa";

const BookAppointment = () => {
  const [form, setForm] = useState({ doctor: "", date: "", time: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.doctor || !form.date || !form.time) {
      alert("Please fill out all fields!");
      return;
    }
    alert(
      `✅ Appointment booked with ${form.doctor} on ${form.date} at ${form.time}`
    );
  };

  return (
    <div className={`container mt-5 ${styles.wrapper}`}>
      <div className={`p-4 shadow-sm ${styles.formCard}`}>
        <h3 className="text-center mb-4 text-primary d-flex justify-content-center align-items-center gap-2">
          <FaCalendarPlus size={24} /> Book Appointment
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className={`form-label fw-semibold ${styles.label}`}>
              Doctor
            </label>
            <select
              className={`form-select ${styles.select}`}
              name="doctor"
              onChange={handleChange}
              value={form.doctor}
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. John">Dr. John</option>
            </select>
          </div>
          <div className="mb-3">
            <label className={`form-label fw-semibold ${styles.label}`}>
              Date
            </label>
            <input
              type="date"
              name="date"
              className={`form-control ${styles.input}`}
              onChange={handleChange}
              value={form.date}
            />
          </div>
          <div className="mb-3">
            <label className={`form-label fw-semibold ${styles.label}`}>
              Time
            </label>
            <input
              type="time"
              name="time"
              className={`form-control ${styles.input}`}
              onChange={handleChange}
              value={form.time}
            />
          </div>
          <button className="btn btn-success w-100 mt-3">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
