import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="callout-text">Github</strong> Calendar
      </h1>
      <GitHubCalendar
        username="toluhunter"
        blockSize={15}
        blockMargin={5}
        color="#2EB2D3"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;