import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';


function App() {
  return (
    <div  id="home" className="App">
       {/* --Nav*/}
    <nav
      id="home-nav"
      className="navbar navbar-expand-lg container navbar-dark"
      aria-label="Tenth navbar example"
    >
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="#">
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
                href="#"
                className="nav-link text-uppercase spacing-text px-3"
                title="Shop"
                >Shop</a
              >
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-uppercase spacing-text px-3"
                title="Play My Kitchen"
                >Play My Kitchen</a
              >
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
                href="#"
                className="nav-link text-uppercase spacing-text px-3"
                title="About Us"
                >About Us</a
              >
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-uppercase spacing-text px-3"
                title="Gallery"
                >Gallery</a
              >
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
    <main>
      {/* -- Slider  */}
      <div id="home-carousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#home-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#home-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#home-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active background-slider image-slide-one">
            <div className="container">
              <div className="text-center color-white col-md-12 col-xl-8 col-lg-10">
                <p className="spacing-text text-uppercase paragraph-shadow">
                  Design and order your new kitchen online today
                </p>
                <h2 className="title-shadow">
                  Bespoke & made to measure handmade kitchen design
                </h2>

                <p>
                  <a
                    className="btn btn-lg button-pill button-main text-uppercase mt-5"
                    href="#"
                    >Order Now</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item background-slider image-slide-two">
            <div className="container">
              <div className="text-center color-white col-md-8">
                <p className="spacing-text text-uppercase paragraph-shadow">
                  Design and order your new kitchen online today
                </p>
                <h2 className="title-shadow">
                  Bespoke & made to measure handmade kitchen design
                </h2>

                <p>
                  <a
                    className="btn btn-lg button-pill button-main text-uppercase mt-5"
                    href="#"
                    >Order Now</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item background-slider image-slide-three">
            <div className="container">
              <div className="text-center color-white col-md-8">
                <p className="spacing-text text-uppercase paragraph-shadow">
                  Design and order your new kitchen online today
                </p>
                <h2 className="title-shadow">
                  Bespoke & made to measure handmade kitchen design
                </h2>

                <p>
                  <a
                    className="btn btn-lg button-pill button-main text-uppercase mt-5"
                    href="#"
                    >Order Now</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- /Slider  */}

      {/* -- Showcase  */}
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div id="showcase-image" className="col-lg-6 col-sm-12 lg-block"></div>
          <div id="showcase-text" className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
            <p className="paragraph-color-primary spacing-text text-uppercase">
              Quality Craftmanship from build to delivery
            </p>
            <h3>Discover the beauty of a handmade kitchen</h3>
            <p className="color-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget est sit amet sapien venenatis maximus vel in urna. Nam mauris
              arcu, feugiat in finibus vitae, sollicitudin id purus. Ut
              imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
            </p>
            <a
              className="btn btn-lg button-pill button-main text-uppercase mt-5"
              href="#"
              >About Us</a
            >
          </div>
        </div>
      </div>
      {/* -- /Showcase  */}

      {/* -- /Testimony  */}
      <div id="testimonial">
        <div className="container p-0">
          <div id="testimonial-slider" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="col-xl-6 col-lg-6 col-md-8 text-center">
                    <p
                      className="paragraph-color-primary spacing-text text-uppercase"
                    >
                      What Our Customers Say
                    </p>
                    <h4>
                      Over 45 years experience designing handmade kitchens
                    </h4>
                    <p className="color-grey">
                      Since my first contact I have received a very high level
                      of customer service and advice with my kitchen plans. Ben
                      responded very quickly to all of my emails and delivery of
                      the kitchen was as planned.
                    </p>
                    <p className="color-grey">Jane, Dundee</p>
                    <p>
                      <a
                        className="btn btn-lg button-pill button-main text-uppercase mt-5"
                        href="#"
                        >Frequently Asked Questions</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="col-xl-6 col-lg-6 col-md-8 text-center">
                    <p
                      className="paragraph-color-primary spacing-text text-uppercase"
                    >
                      What Our Customers Say
                    </p>
                    <h4>
                      Over 35 years experience designing handmade kitchens
                    </h4>
                    <p className="color-grey">
                      Since my first contact I have received a very high level
                      of customer service and advice with my kitchen plans. Ben
                      responded very quickly to all of my emails and delivery of
                      the kitchen was as planned.
                    </p>
                    <p className="color-grey">Jane, Dundee</p>
                    <p>
                      <a
                        className="btn btn-lg button-pill button-main text-uppercase mt-5"
                        href="#"
                        >Frequently Asked Questions</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonial-slider"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon primary"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonial-slider"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* -- /Testimony  */}
      {/* -- /Gallery  */}

      <div className="container px-4 py-3" id="gallery">
        <h4 className="pb-2 pt-5 text-center">Customer Gallery</h4>
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div id="thumb-01" className="card h-100 overflow-hidden">
              <img src="./assets/images/gallery/01.png" alt="" />
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6">
            <div id="thumb-02" className="card h-100 overflow-hidden">
              <img src="./assets/images/gallery/02.png" alt="" />
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6">
            <div id="thumb-03" className="card h-100 overflow-hidden">
              <img src="./assets/images/gallery/03.png" alt="" />
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6">
            <div id="thumb-04" className="card h-100 overflow-hidden">
              <img src="./assets/images/gallery/04.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>
              <a
                className="btn btn-lg button-pill button-main text-uppercase mt-5"
                href="#"
                >View More</a
              >
            </p>
          </div>
        </div>
      </div>

      {/* -- /Gallery  */}

      {/* -- /Footer  */}
      <div className="py-3 background-footer">
        <footer className="container pt-4">
          <div className="row align-self-center justify-content-center">
            <div className="col-12 text-center mb-4">
              <div className="side-line"></div>
              <img
                src="assets/images/logo-white.svg"
                alt="MHK - Home"
                tilte="MHK - Home"
              />
              <div className="side-line"></div>
            </div>
            <div className="col-md-12 col-xl-8 col-lg-12 mt-3">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <h5 className="footer-title">About</h5>

                  <ul className="list-unstyled text-small">
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Shop</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Plan My Kitchen</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                      >
                        About Us</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Gallery</a
                      >
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <h5 className="footer-title">Service</h5>
                  <ul className="list-unstyled text-small">
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >FAQ</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Contact</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >How to Buy</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Downloads</a
                      >
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <h5 className="footer-title">Info</h5>
                  <ul className="list-unstyled text-small">
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Delivery</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Terms</a
                      >
                    </li>
                    <li className="mb-2">
                      <a
                        className="footer-link spacing-text text-decoration-none"
                        href="#"
                        >Privacy</a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  id="footer-social-links"
                  className="col-md-3 col-sm-6 col-xs-6"
                >
                  <h5 className="footer-title">Follow</h5>
                  <a
                    className="footer-social-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/images/social/facebook.svg" />
                  </a>
                  <a
                    className="footer-social-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/images/social/twitter.svg" />
                  </a>
                  <a
                    className="footer-social-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/images/social/instagram.svg" />
                  </a>
                </div>

                <p className="footer-text text-center mt-5">
                  Copyright Online MTC Home Kitchens 2018 - All rights reserved.
                </p>
                <p className="footer-text text-center">
                  Responsive website design, Development & Hosting by mtc.
                </p>
              </div>
            </div>
            <div className="col-12 mt-5 mb-5">
              <hr className="footer-bottom-line" />
            </div>
          </div>
        </footer>
      </div>
      {/* -- /Footer  */}
    </main>
    </div>
  );
}

export default App;
