import React from "react";

function Showcase() {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
export default Showcase;
 
