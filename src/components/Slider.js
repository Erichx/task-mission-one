import React from "react";

function Slider() {
  const data = [
    {
      id: 1,
      title: "Design and order your new kitchen online today",
      subtitle: " Bespoke & made to measure handmade kitchen design ",
      link: "/order",
    },
    {
      id: 2,
      title: "Design and order your new kitchen online today",
      subtitle: " Bespoke & made to measure handmade kitchen design ",
      link: "/order-now",
    },
  ];

  return (
    <React.Fragment>
      {/* -- Slider  */}
      <div id="home-carousel" className="carousel slide">
        <div className="carousel-indicators">
          {data.map((item) => (
            <button
              type="button"
              data-bs-target="#home-carousel"
              data-bs-slide-to={item.id - 1}
              className={` ${data[1].id - 1 === item.id - 1 ? "active" : ""}`}
              aria-current="true"
              aria-label={"Slide " + item.id}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {data.map((item) => (
            <div
              className={`carousel-item background-slider image-slide-one ${
                data[1].id === item.id ? "active" : ""
              }`}
            >
              <div className="container">
                <div className="text-center color-white col-md-12 col-xl-8 col-lg-10">
                  <p className="spacing-text text-uppercase paragraph-shadow">
                    {item.title}
                  </p>
                  <h2 className="title-shadow">{item.subtitle}</h2>

                  <p>
                    <a
                      className="btn btn-lg button-pill button-main text-uppercase mt-5"
                      href={item.link}
                    >
                      Order Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  Slider  */}
    </React.Fragment>
  );
}

export default Slider;
