import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I am <span className="purple">Musa Raza</span>, a software engineer
            focused on scalable web and mobile platforms.
            <br />
            <br />
            I design systems that stay reliable as users, data, and traffic
            increase. The work covers service boundaries, data flow, access
            control, and third-party integrations.
            <br />
            <br />
            Delivery includes cloud deployment and infrastructure as code, so
            environments can be reproduced and maintained consistently.
            <br />
            <br />
            Focus areas
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> System design across clients, APIs, and data stores
            </li>
            <li className="about-activity">
              <ImPointRight /> Infrastructure as code and repeatable deployments
            </li>
            <li className="about-activity">
              <ImPointRight /> Access control, live data, and production AI
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
