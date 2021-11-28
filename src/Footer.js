import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <section className="footer text-base">
      <Container>
        <Row>
          <Col md={4}>
            <div class="footer-container">
              <ul class="footer-nav">
                <li>
                  <Nav.Link href="/Contact">
                    Contact
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={8}>
            <p class="donate">
              Donate KSM:
              <b>DDFWpfv6BG1GvL1MUiByrs3avEt18guoP6Qx8qxqfkbMsMi</b>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
