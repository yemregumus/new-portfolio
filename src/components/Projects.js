import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";

export const Projects = () => {
  const projects = [
    {
      title: "The Met Site",
      description: "The Metropolitan Museum of Art Site is built with React.js, Bootstrap, and Next.js for dynamic content delivery and server‐side rendering, the site leverages JWT for secure user authentication and authorization.",
      imageUrl: projImg1,
      githubLink: "https://github.com/yemregumus/WEB422-Assignment6",
      linkToLive: "https://museumofartnewyork.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my projects</p>
            <Tab.Container id="projects=tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Software Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} githubLink={project.githubLink} linkToLive={project.linkToLive} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Tab Two Content</Tab.Pane>
                <Tab.Pane eventKey="third">Tab Three Content</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
