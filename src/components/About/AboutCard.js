import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="callout-text">Tolulope Fakoya </span>
            <br />
            <br />
            Welcome to the realm of technology and adventure! <br />
            I'm a DevOps Engineer, Bug Bounty Hunter and an AI/ML Ethnusianst driven by innovation and a thirst for exploration.
            Join me as we dive into the thrilling world where code meets creativity, and hacking is an art form. Let's push boundaries and embark on an unforgettable journey together.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
