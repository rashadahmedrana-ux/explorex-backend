import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand fw-bold" to="/">
          ExploreX
        </Link>

        {/* NAV LINKS */}
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Destinations
          </Link>

          <Link className="nav-link" to="/weather">
            Weather
          </Link>

          <Link className="nav-link" to="/chat">
            Chat
          </Link>

          <Link className="nav-link" to="/my-trips">
            My Trips
          </Link>

          <Link className="nav-link" to="/login">
            Login
          </Link>

          <Link className="nav-link" to="/signup">
            Signup
          </Link>

          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
