import React from "react";
import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./dotevent-logo.png";

function Header() {
  return (
    <>
      <div className="App-header addConfPage">
        <div>
          <Container className="header-seperator">
            <div className="logo-container">
              <a href="/">
                <img width="150" src={logo} alt="" />
              </a>
            </div>

            <div class="otherContainer">
              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              <div>
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
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
