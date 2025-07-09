const Prescriptions = () => {
  const prescriptions = [
    { id: 1, medicine: "Paracetamol", doctor: "Dr. Smith", date: "2025-07-01" },
    { id: 2, medicine: "Amoxicillin", doctor: "Dr. Brown", date: "2025-07-03" },
  ];

  return (
    <div className="prescriptions">
      <h2>Your Prescriptions</h2>
      <ul>
        {prescriptions.map((presc) => (
          <li key={presc.id}>
            {presc.medicine} prescribed by {presc.doctor} on {presc.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Prescriptions;
