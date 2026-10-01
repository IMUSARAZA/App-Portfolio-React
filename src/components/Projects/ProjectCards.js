import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards({ project }) {
  const shots = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.imgPath];
  const [shot, setShot] = useState(0);

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={shots[shot]}
        alt={project.title}
        loading="lazy"
        decoding="async"
      />
      <Card.Body>
        <p className="project-role">{project.role}</p>
        <Card.Title>{project.title}</Card.Title>
        <div className="stack-row">
          {project.stack.map((item) => (
            <span className="stack-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
        {shots.length > 1 && (
          <div className="shot-row">
            {shots.map((src, index) => (
              <button
                type="button"
                key={src + index}
                className={index === shot ? "shot-btn active" : "shot-btn"}
                onClick={() => setShot(index)}
              >
                <img src={src} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        )}
        <Card.Text style={{ textAlign: "left" }}>{project.summary}</Card.Text>
        <ul className="arch-list">
          {project.architecture.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.links.map((link) => (
            <Button
              key={link.href}
              variant="primary"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
