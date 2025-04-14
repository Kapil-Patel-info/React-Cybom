import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* Dark Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BookStore Admin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/Show">
                Show
              </Link>
              <Link className="nav-link" to="/Example">
                Example
              </Link>
              <Link className="nav-link" to="/Form">
                Form
              </Link>
              <span className="nav-link disabled" aria-disabled="true">
                Disabled
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} BookStore Admin Panel. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
