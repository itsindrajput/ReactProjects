import { NavLink } from "react-router-dom";
import { CiMedicalCase } from "react-icons/ci";
import {
  FaCalendarAlt,
  FaFilePrescription,
  FaSignInAlt,
  FaUserMd,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav
    className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbar}`}
  >
    <div className="container-fluid">
      <NavLink
        className="navbar-brand fw-bold d-flex align-items-center gap-2"
        to="/dashboard"
      >
        <CiMedicalCase size={28} /> <span>Medi Tracker</span>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/appointments">
              <FaCalendarAlt className="me-1" /> Book
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/prescriptions">
              <FaFilePrescription className="me-1" /> Prescriptions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <FaSignInAlt className="me-1" /> Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
