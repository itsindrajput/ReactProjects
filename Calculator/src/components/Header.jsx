import { useState } from "react";
import { FaHome, FaCalculator, FaBars } from "react-icons/fa";
import "./Header.css";
import { BsPersonBadge } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="header-left">
        <FaCalculator className="logo-icon" />
        <span className="app-title">React Calculator</span>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <a href="#" className="nav-link active">
          <FaHome className="nav-icon" /> Home
        </a>
        <a
          href="https://github.com/itsindrajput/ReactProjects/tree/main/Calculator"
          className="nav-link"
        >
          <BsPersonBadge className="nav-icon" />
          About
        </a>
        <a href="https://itsindrajput.netlify.app/" className="nav-link">
          <BiSolidPhoneCall className="nav-icon" />
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
