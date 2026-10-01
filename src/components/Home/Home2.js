import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const layers = [
  {
    title: "Clients",
    text: "Next.js and React on the web. Flutter and Expo on phones. One product, more than one screen.",
  },
  {
    title: "Services",
    text: "Node.js and NestJS APIs. Role-based access for users and admins. AI features that answer from real product data.",
  },
  {
    title: "Data",
    text: "PostgreSQL and Supabase for structured records. MongoDB when a product needs a flexible document store.",
  },
  {
    title: "Deploy and partners",
    text: "AWS in production. Stripe for payments. Third-party APIs when the product needs data it does not own.",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="home-about-heading">
              Software that has to{" "}
              <span className="purple">stay up</span> for real users
            </h1>
            <p className="home-about-body">
              I am Musa Raza. I ship web and mobile products, then I stay with
              the parts that keep them running: who can do what, where the data
              lives, and which outside systems the product has to talk to.
              <br />
              <br />
              I design those pieces so a platform can grow. More users, more
              roles, and more integrations, without starting over.
              <br />
              <br />
              I am applying for graduate study in software and service
              architectures, so this site shows the systems, not just the
              screenshots.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="system-row">
          {layers.map((layer) => (
            <Col md={3} sm={6} className="system-col" key={layer.title}>
              <div className="system-box">
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IMUSARAZA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/imusaraza"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
