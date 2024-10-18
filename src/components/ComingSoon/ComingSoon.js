import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { AiOutlineHome } from "react-icons/ai";

function ComingSoon() {

    return (
        <div>
            <Container fluid className="coming-soon-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <h1 style={{ fontSize: "3rem" }}>Coming Soon</h1>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <p style={{ fontSize: "1.5rem", color: "#777" }}>
                        I am working hard to bring something amazing to you.
                    </p>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button href="#about" className="home-button" size="lg" variant="light">

                        <AiOutlineHome />&nbsp;
                        Go to Home
                    </Button>{' '}

                </Row>
            </Container>
        </div>
    );
}

export default ComingSoon;
