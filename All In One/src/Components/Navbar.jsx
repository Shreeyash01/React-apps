import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          React Apps
        </a>
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
          <ul className="navbar-nav">
            <Link
              className="nav-item nav-link active link underline-animation"
              to={"/Form"}
            >
              <h3> Form </h3>
            </Link>
            <Link
              className="nav-item nav-link active link underline-animation"
              to={"/Weather"}
            >
              <h3> Weather </h3>
            </Link>
            <Link
              className="nav-item nav-link active link underline-animation"
              to={"/Clock"}
            >
              <h3> Clock </h3>
            </Link>
            <Link
              className="nav-item nav-link active link underline-animation"
              to={"/MusicPlayer"}
            >
              <h3> MusicPlayer </h3>
            </Link>
            <Link
              className="nav-item nav-link link underline-animation"
              to={"/Calculator"}
            >
              <h3> Calculator </h3>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
