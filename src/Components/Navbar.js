import React, { useState } from "react";

function Navbar() {

    const [show,setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="/">
            <span className="highlight-text">Polka</span>Dot
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={()=>setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
           
            <div class={`collapse navbar-collapse  ${show ? show : ""}`} id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/" >
                  
General
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/" >
                  Meetup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/" >
                  AMA
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/" >
                  Event
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/" >
                  Learning
                  </a>
                </li>
                
              </ul>
              <button class="btn btn-style" type="submit">AddConference</button>
             
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
