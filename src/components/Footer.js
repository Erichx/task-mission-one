import React from "react";

function Footer() {
    return (
        <React.Fragment>
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
                        >
                          Shop
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          Plan My Kitchen
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          Gallery
                        </a>
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
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          How to Buy
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          Downloads
                        </a>
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
                        >
                          Delivery
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          Terms
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="footer-link spacing-text text-decoration-none"
                          href="#"
                        >
                          Privacy
                        </a>
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
                    Copyright Online MTC Home Kitchens 2018 - All rights
                    reserved.
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
        </React.Fragment>
    )
}
export default Footer;
 
