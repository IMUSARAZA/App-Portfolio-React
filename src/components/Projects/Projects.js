import React, { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projects from "./projectData";

const Particle = lazy(() => import("../Particle"));

function ProjectGrid({ items }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {items.map((project) => (
        <Col md={4} className="project-card" key={project.id}>
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
}

function Projects({ variant = "page" }) {
  const featured = projects.filter((project) => project.featured);
  const earlier = projects.filter((project) => !project.featured);

  if (variant === "home") {
    return (
      <Container fluid className="home-about-section" id="work">
        <Container>
          <h1 className="project-heading">
            Systems I <strong className="purple">shipped</strong>
          </h1>
          <p style={{ color: "white" }}>
            Products where the hard part was the service behind the screen:
            roles, data, outside APIs, and a real deploy.
          </p>
          <ProjectGrid items={featured} />
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Suspense fallback={null}>
        <Particle />
      </Suspense>
      <Container>
        <h1 className="project-heading">
          Platforms and <strong className="purple">services</strong>
        </h1>
        <p style={{ color: "white" }}>
          Marketplaces, subscriptions, and voice agents. Each card shows the
          stack and how the pieces connect.
        </p>
        <ProjectGrid items={featured} />
        <h1 className="project-heading" style={{ paddingTop: "20px" }}>
          Earlier <strong className="purple">mobile apps</strong>
        </h1>
        <ProjectGrid items={earlier} />
      </Container>
    </Container>
  );
}

export default Projects;
