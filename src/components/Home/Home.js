import React, { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import Type from "./Type";

const Particle = lazy(() => import("../Particle"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Suspense fallback={null}>
          <Particle />
        </Suspense>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi, I build scalable platforms.
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Musa Raza</strong>
              </h1>

              <div className="type-wrap">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Illustration of a developer at a desk"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects variant="home" />
    </section>
  );
}

export default Home;
