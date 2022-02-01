import React from "react";

function Testimonials() {
    return (
        <React.Fragment>
       {/* -- /Testimony  */}
       <div id="testimonial">
          <div className="container p-0">
            <div id="testimonial-slider" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="col-xl-6 col-lg-6 col-md-8 text-center">
                      <p className="paragraph-color-primary spacing-text text-uppercase">
                        What Our Customers Say
                      </p>
                      <h4>
                        Over 45 years experience designing handmade kitchens
                      </h4>
                      <p className="color-grey">
                        Since my first contact I have received a very high level
                        of customer service and advice with my kitchen plans.
                        Ben responded very quickly to all of my emails and
                        delivery of the kitchen was as planned.
                      </p>
                      <p className="color-grey">Jane, Dundee</p>
                      <p>
                        <a
                          className="btn btn-lg button-pill button-main text-uppercase mt-5"
                          href="#"
                        >
                          Frequently Asked Questions
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="col-xl-6 col-lg-6 col-md-8 text-center">
                      <p className="paragraph-color-primary spacing-text text-uppercase">
                        What Our Customers Say
                      </p>
                      <h4>
                        Over 35 years experience designing handmade kitchens
                      </h4>
                      <p className="color-grey">
                        Since my first contact I have received a very high level
                        of customer service and advice with my kitchen plans.
                        Ben responded very quickly to all of my emails and
                        delivery of the kitchen was as planned.
                      </p>
                      <p className="color-grey">Jane, Dundee</p>
                      <p>
                        <a
                          className="btn btn-lg button-pill button-main text-uppercase mt-5"
                          href="#"
                        >
                          Frequently Asked Questions
                        </a>
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
        </React.Fragment>
    )
}
export default Testimonials;
 
