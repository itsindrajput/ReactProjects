import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const BookAppointment = () => {
  const [form, setForm] = useState({ doctor: "", date: "", time: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked with ${form.doctor} on ${form.date} at ${form.time}`
    );
    setForm({ doctor: "", date: "", time: "" });
  };

  return (
    <div className="form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Doctor's Name"
          type="text"
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
        />
        <InputField
          label="Date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <InputField
          label="Time"
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />
        <Button text="Book Now" />
      </form>
    </div>
  );
};
export default BookAppointment;
