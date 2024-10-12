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
              ABOUT ME
            </h1>
            <p className="home-about-body">
              I’m Tolulope Fakoya, a passionate DevOps engineer with a deep passion for both cybersecurity who thrives on turning challenges into victories and automating success at every opportunity.
              I’ve slashed deployment times with efficient CI/CD pipelines, optimized cloud costs, and leveraged tools like Terraform, Jenkins,
              and AWS to build infrastructure that fuels growth.
              <br />
              <br />
              My adaptability shines through in everything I do from implementing serverless architectures to leading incident responses that keep downtime to a minimum. With a strong focus on cybersecurity,
              I combine my DevOps expertise with a keen eye for security, ensuring that the systems I build are not only efficient but also secure.
              Certified in both DevOps and cybersecurity, I’m dedicated to delivering high-quality, secure solutions that drive growth and innovation.
              <br />
              <br />
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
