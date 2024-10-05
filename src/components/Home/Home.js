import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import homeLogo from "../../Assets/home-main.webp";
// import Particle from "../Particle";
import Slider from "../slider"
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Slider />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                toluhunter<span className="callout-text">$</span>: whoami<br />
                <strong className="main-name"> Tolulope   Fakoya</strong>
              </h1><br />

              <div style={{ padding: 50, textAlign: "left" }}>
                <span style={{ fontSize: 40 }}>
                  toluhunter<span className="callout-text">$</span>: ./whatido<br /><br />
                </span>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "1000px" }}
              />
            </Col> */}
          </Row>
          <Row>
                        <Button className="home-button" size="lg" variant="light">Light</Button>{' '}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
