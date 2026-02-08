import React from "react";

function Layout({ children }) {
  return (
    <>
      {/* Header */}
     <header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <a className="navbar-brand fw-bold" href="/">
      ExploreX
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#weather">Weather</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#chat">Chat</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#admin">Admin</a>
        </li>
      </ul>
    </div>
  </div>
</header>


      {/* Page Content */}
      <main className="bg-light min-vh-100 py-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2025 ExploreX Travel
      </footer>
    </>
  );
}

export default Layout;
