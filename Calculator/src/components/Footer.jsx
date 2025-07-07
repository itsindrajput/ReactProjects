import "./Footer.css";
import {
  FaLaptopCode,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-icons">
        <a
          href="https://itsindrajput.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaGlobe />
        </a>
        <a
          href="https://www.linkedin.com/in/itsindrajput/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/itsindrajput"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/itsindrajput/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaLaptopCode />
        </a>
        <a
          href="https://twitter.com/itsindrajput"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/itsindrajput"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} itsindrajput. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
