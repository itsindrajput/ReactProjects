import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { FaUserDoctor, FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    setAppointments([
      { id: 1, doctor: "Dr. Smith", date: "2025-07-20", time: "10:00 AM" },
      { id: 2, doctor: "Dr. John", date: "2025-07-25", time: "2:00 PM" },
    ]);
  }, []);

  return (
    <div className={`container mt-5 ${styles.wrapper}`}>
      <div className={`p-4 shadow-sm ${styles.card}`}>
        <h3 className="mb-4 text-center text-primary">
          👋 Welcome, {user.name || "Guest"}
        </h3>

        <h5 className={`mb-3 fw-semibold ${styles.sectionHeading}`}>
          <FaCalendarAlt className="me-2" /> Your Appointments
        </h5>

        <div className={styles.appointmentList}>
          {appointments.map((a) => (
            <div key={a.id} className={`p-3 mb-3 ${styles.appointmentCard}`}>
              <div className={styles.date}>{a.date}</div>

              <div className={styles.time}>
                <FaClock className={styles.iconTime} /> {a.time}
              </div>

              <div className={styles.doctor}>
                <FaUserDoctor className={styles.doctorIcon} /> {a.doctor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
