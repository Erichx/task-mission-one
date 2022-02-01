import React from "react";

function Slider() {
  return (
    <React.Fragment>
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
                  >
                    Order Now
                  </a>
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
                  >
                    Order Now
                  </a>
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
                  >
                    Order Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- /Slider  */}
    </React.Fragment>
  );
}

export default Slider;
