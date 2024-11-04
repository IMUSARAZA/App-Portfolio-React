import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import instagram from "../../Assets/Projects/instagram.jpg";
import gymvisa from "../../Assets/Projects/gymvisa.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import classinsights from "../../Assets/Projects/12.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymvisa}
              isBlog={false}
              title="Gym Visa"
              description="Gym Visa is a Flutter-based mobile app with a backend in Firebase, designed to offer users access to multiple gyms under various subscription packages. Users can purchase these packages through the in-app payment gateway. Additionally, the app provides offline exercise videos for full-body workouts and allows users to request diet plans from different nutritionists. Subscribed users can visit gyms by scanning the provided QR code for verification, while the admin panel manages user and gym data based on subscriptions."
              ghLink="https://github.com/IMUSARAZA/Gym-Visa-Flutter"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classinsights}
              isBlog={false}
              title="Class Insights"
              description="ClassInsight is a powerful and intuitive school management app built with Flutter, designed to streamline the educational process for administrators, teachers, students, and parents. With a user-friendly interface and robust functionality, ClassInsight ensures efficient management and seamless communication within the school community."
              ghLink="https://github.com/IMUSARAZA/ClassInsight"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram Clone"
              description="Experience the essence of social media with our Instagram clone app, crafted using Flutter. Enjoy a responsive Instagram-like UI, complete with email and password authentication. Share posts with captions, display posts with captions, and engage with likes and comments. Seamlessly search for users, follow them, and view detailed profiles showcasing user posts, followers, and following. All interactions happen in real-time, ensuring an engaging and dynamic experience. Sign out effortlessly to maintain your privacy. Our app provides a smooth and immersive Instagram-like user interface for a superior social media experience."
              ghLink="https://github.com/IMUSARAZA/Instagram-Clone-Flutter.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
