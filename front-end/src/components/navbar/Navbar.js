import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <a href="/" className="logo">
          Elusionz
        </a>
      </div>
      <div className="navbar-links">
        <div className="navbar-link" onClick={() => navigate("/projects")}>
          Projects
        </div>
        <div className="navbar-link" onClick={() => navigate("/about")}>
          About
        </div>
        <div className="navbar-link" onClick={() => navigate("/contact")}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
