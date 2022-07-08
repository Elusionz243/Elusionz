import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <a href="/" className="logo">
          Elusionz
        </a>
      </div>
      <div className="navbar-links">
        <div className="dropdown">
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
              <a
                className="dropdown-item dropdown-link"
                href="/projects/web-dev"
              >
                Webdev
              </a>
            </li>
            <li>
              <a
                className="dropdown-item dropdown-link"
                href="/projects/game-dev"
              >
                Game Dev
              </a>
            </li>
            <li>
              <a
                className="dropdown-item dropdown-link"
                href="/projects/3d-models"
              >
                3D Models
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <a
            className="btn dropdown-toggle navbar-link dropdown-title"
            href="#"
            role="button"
            id="games"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Games
          </a>
          <ul
            className="dropdown-menu"
            style={{ background: "rgb(100, 100, 100)" }}
            aria-labelledby="games"
          >
            <li>
              <a
                className="dropdown-item dropdown-link"
                href="/games/Stardew-Valley"
              >
                Stardew Valley
              </a>
            </li>
            <li>
              <a
                className="dropdown-item dropdown-link"
                href="/games/Satisfactory"
              >
                Satisfactory
              </a>
            </li>
            <li>
              <a
                className="dropdown-item dropdown-link"
                href="/games/Minecraft"
              >
                Minecraft
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="navbar-link">
          Link3
        </a>
        <a href="#" className="navbar-link">
          Link4
        </a>
        <a href="#" className="navbar-link">
          Link5
        </a>
        <a href="#" className="navbar-link">
          Link6
        </a>
      </div>
    </div>
  );
};

export default Navbar;
