import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Find your next tech:<br></br>Conference in the<br></br> polkadot
                ecosystem
              </h1>
              <p className="main-hero-para">
                open-source and crowd-soucred list of Meetup around polkadot
                ecosystem
              </p>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./img/Ethereum.jpg"
                alt="heroimg"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
