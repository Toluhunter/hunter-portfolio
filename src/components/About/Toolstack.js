import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;

