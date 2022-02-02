import React from "react";

function Nav() {
  return (
    <React.Fragment>
      {/* --Nav*/}
      <nav
        id="home-nav"
        className="navbar navbar-expand-lg container navbar-dark"
        aria-label="Tenth navbar example"
      >
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="/home">
            <img
              src="assets/images/logo-white.svg"
              alt="MHK - Home"
              tilte="MHK - Home"
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-main"
            aria-controls="navbar-main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="navbar-nav">
              <li className="nav-item nav-social">
                <div className="nav-link">
                  <a
                    className="social-link text-decoration-none"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="social-link text-decoration-none"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="social-link text-decoration-none"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a
                  href="/shop"
                  className="nav-link text-uppercase spacing-text px-3"
                  title="Shop"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/play-my-kitchen"
                  className="nav-link text-uppercase spacing-text px-3"
                  title="Play My Kitchen"
                >
                  Play My Kitchen
                </a>
              </li>
              <li id="logo-list">
                <img
                  src="assets/images/logo-white.svg"
                  alt="MHK - Home"
                  tilte="MHK - Home"
                />
              </li>
              <li className="nav-item">
                <a
                  href="/about-us"
                  className="nav-link text-uppercase spacing-text px-3"
                  title="About Us"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="gallery"
                  className="nav-link text-uppercase spacing-text px-3"
                  title="Gallery"
                >
                  Gallery
                </a>
              </li>

              <li className="nav-item nav-my-order">
                <button
                  type="button"
                  className="btn btn-outline-white button-pill text-uppercase"
                >
                  My Order <i className="fas fa-shopping-cart"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --/Nav*/}
    </React.Fragment>
  );
}

export default Nav;
