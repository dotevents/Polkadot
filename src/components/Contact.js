import React from "react";
import contactImage from "../contact.svg";
import logo from "../dotevent-logo.png";
import Footer from "../Footer";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Contact() {
  return (
    <>
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img width='150' src={logo} alt="" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <div id="responsive-navbar-nav">
              <Nav className="customNav">
                {/* <Nav.Link href="/General" style={{ fontWeight: "bold" }}>
                  General
                </Nav.Link>
                <Nav.Link href="/meet" style={{ fontWeight: "bold" }}>
                  Meetup
                </Nav.Link>
                <Nav.Link href="/AMA" style={{ fontWeight: "bold" }}>
                  AMA
                </Nav.Link>
                <Nav.Link href="/Event" style={{ fontWeight: "bold" }}>
                  Event
                </Nav.Link>
                <Nav.Link href="/Learn" style={{ fontWeight: "bold" }}>
                  Learning
                </Nav.Link> */}
                <Nav.Link className="navCta" href="/add-conference">
                  Add Conference
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </header>{" "}
      <section class="contact">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6">
              <h1 class="">Get in touch</h1>

              <p>
                Having question or comment? <br />
                please drop a mail
                <a href=" mailto:info@dotevent.co">&nbsp;info@dotevent.co</a>
              </p>
            </div>

            <div class="col-lg-6">
              <img src={contactImage} width="100%" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
