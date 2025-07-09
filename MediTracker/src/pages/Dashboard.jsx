import appointments from "../data/appointments.json";

const Dashboard = () => {
  const user = { name: "John Doe", email: "john@example.com" };

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <h3>Upcoming Appointments</h3>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.doctor} - {appt.date} at {appt.time}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;
