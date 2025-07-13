// src/pages/Prescriptions.jsx
import styles from "./Prescriptions.module.css";
import { FaPills } from "react-icons/fa6";

const Prescriptions = () => {
  const prescriptions = [
    { id: 1, medicine: "Paracetamol", dosage: "2 times a day" },
    { id: 2, medicine: "Amoxicillin", dosage: "1 time a day" },
  ];

  return (
    <div className={`container mt-5 ${styles.wrapper}`}>
      <div className={`p-4 shadow-sm ${styles.card}`}>
        <h3 className="text-center mb-4 text-primary">💊 Prescriptions</h3>
        <ul className="list-group">
          {prescriptions.map((p) => (
            <li
              key={p.id}
              className={`list-group-item ${styles.prescriptionItem}`}
            >
              <FaPills className={styles.icon} />
              <div>
                <div className={styles.medicine}>{p.medicine}</div>
                <div className={styles.dosage}>{p.dosage}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prescriptions;
