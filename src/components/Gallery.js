import React from "react";

function Gallery() {
  return (
    <React.Fragment>
      {/*  Gallery  */}

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
                href="/gallery"
              >
                View More
              </a>
            </p>
          </div>
        </div>
      </div>

      {/*  Gallery  */}
    </React.Fragment>
  );
}
export default Gallery;
