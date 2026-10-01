import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiFirebase,
  SiPostgresql,
  SiFlutter,
  SiAmazonaws,
  SiStripe,
  SiNestjs,
  SiSupabase,
  SiExpo,
} from "react-icons/si";

function Techstack() {
  const icons = [
    DiJavascript1,
    DiReact,
    SiNextdotjs,
    DiNodejs,
    SiNestjs,
    SiFlutter,
    SiExpo,
    SiPostgresql,
    DiMongodb,
    SiSupabase,
    SiFirebase,
    SiAmazonaws,
    SiStripe,
    DiGit,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((Icon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
