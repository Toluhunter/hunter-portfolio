import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="callout-text"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Unlocking the code with a dash of daring! Tolulope Fakoya:
              where DevOps meets adventure and cybersecurity is a thrilling challenge. Step into the unknown realms of tech with me!
              <br />
              <br />I'm experienced in
              <i>
                <b className="callout-text"> Python, Javascript and Bash. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="callout-text">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="callout-text">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="callout-text">Node.js</b> and
              <i>
                <b className="callout-text">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="callout-text"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
