import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink to="/form" className="nav-link">
        Click me
      </NavLink>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/paula-gamez-448354222/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={24} color="white" />
        </a>
        <a
          href="https://github.com/PSGamezG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={24} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
