import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col md={12}>
            <Navbar collapseOnSelect expand="lg" className="d-flex justify-content-end">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar id="responsive-navbar-nav">
                <Nav className="customNav me-auto">
                  <Nav.Link href="#">Add a conference</Nav.Link>
                  <Nav.Link href="#">Connect on GitHub</Nav.Link>
                  <Nav.Link href="#">Add a conference</Nav.Link>
                </Nav>
              </Navbar>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
