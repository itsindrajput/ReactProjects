import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/book">Book Appointment</Link>
    <Link to="/prescriptions">Prescriptions</Link>
    <Link to="/">Logout</Link>
  </nav>
);

export default Navbar;
