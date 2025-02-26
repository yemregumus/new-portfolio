import { Col, Row, Nav, Tab } from "react-bootstrap";

import { Container } from "react-bootstrap";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description 1",
      imageUrl: "image1",
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
                  <Nav.Link eventKey="first">Tab One </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <p>{project.title}</p>;
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
    </section>
  );
};
