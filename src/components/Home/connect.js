import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Connect() {
    return (
        <Container fluid className="home-about-section" id="connect">
            <Row>
                <Col md={12} className="home-about-social">
                    <h1>HIT ME UP ON</h1>
                    <p>
                        Feel free to <span className="callout-text">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Toluhunter"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://x.com/tolu_hunter"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/tolulope-fakoya/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Connect;