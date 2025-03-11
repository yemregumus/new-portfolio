import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "The Met Site",
      description: "The Metropolitan Museum of Art Site is built with React.js, Bootstrap, and Next.js for dynamic content delivery and server‐side rendering, the site leverages JWT for secure user authentication and authorization.",
      imageUrl: projImg1,
      githubLink: "https://github.com/yemregumus/WEB422-Assignment6",
      linkToLive: "https://museumofartnewyork.netlify.app/",
    },
    {
      title: "My first portfolio site",
      description: "I used React.js, Next.js, TailwindCSS to build it and Netlify to deploy. I also used Framer Motion for animations.",
      imageUrl: projImg2,
      githubLink: "https://github.com/yemregumus/pfSite",
      linkToLive: "https://yunusgumus.netlify.app/",
    },
    {
      title: "My first portfolio site",
      description: "This project is a personal portfolio website built with React, Bootstrap, Express, and Nodemailer for contact backend. It showcases my skills, projects, and provides a way to contact me.",
      imageUrl: projImg3,
      githubLink: "https://github.com/yemregumus/new-portfolio",
      linkToLive: "https://yegumus.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my projects</p>
            <Tab.Container id="projects=tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center d-flex flex-nowrap overflow-auto nav-justified" id="pills-tab">
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
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
