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
        {/* <div className="dropdown">
          <a
            className="btn dropdown-toggle navbar-link dropdown-title"
            href="#"
            role="button"
            id="projects"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Projects
          </a>
          <ul
            className="dropdown-menu"
            style={{ background: "rgb(100, 100, 100)" }}
            aria-labelledby="projects"
          >
            <li>
              <a className="dropdown-item dropdown-link" href="/projects">
                All projects
              </a>
            </li>
            <li>
              <a
                className="dropdown-item dropdown-link"
                href="/projects/webdev"
              >
                Webdev
              </a>
            </li>
          </ul>
        </div> */}
        <div className="navbar-link" onClick={() => navigate("/About")}>
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
