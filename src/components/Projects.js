import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";

export const Projects = () => {
  const webProjects = [
    {
      title: "The Met Site",
      description: "The Metropolitan Museum of Art Site is built with React.js, Bootstrap, and Next.js for dynamic content delivery and server‐side rendering. The site leverages JWT for secure user authentication and authorization.",
      imageUrl: projImg1,
      githubLink: "https://github.com/yemregumus/WEB422-Assignment6",
      linkToLive: "https://museumofartnewyork.netlify.app/",
    },
    {
      title: "My First Portfolio Site",
      description: "I used React.js, Next.js, TailwindCSS to build it and Netlify to deploy. I also used Framer Motion for animations.",
      imageUrl: projImg2,
      githubLink: "https://github.com/yemregumus/pfSite",
      linkToLive: "https://yunusgumus.netlify.app/",
    },
    {
      title: "My Portfolio Site (Updated)",
      description: "This project is a personal portfolio website built with React, Bootstrap, Express, and Nodemailer for contact backend. It showcases my skills, projects, and provides a way to contact me.",
      imageUrl: projImg3,
      githubLink: "https://github.com/yemregumus/new-portfolio",
      linkToLive: "https://yegumus.netlify.app/",
    },
    {
      title: "Movie Library Website",
      description: "Built with React and Next.js, interface for viewing movie details. The site uses the TMDb API to fetch movie data and display it to the user.",
      imageUrl: projImg4,
      githubLink: "https://github.com/yemregumus/WEB422-Assignment3",
      linkToLive: "https://movlibapp.netlify.app/",
    },
    {
      title: "IntelliSuite AI SaaS",
      description: "The project leverages Next.js and React to build a modern web application that is efficient and user-friendly. Integrated with libraries like Shadcn, Axios, React Hook Form, and Radix UI.",
      imageUrl: projImg5,
      githubLink: "https://github.com/yemregumus/intellisuite",
    },
    {
      title: "IntelliCycles Calendar App",
      description: "Built with Node.js, Express, PostgreSQL, Bcrypt, JWT, Passport.js, React, Vite, Axios, FullCalendar, Tailwind CSS, and Jest.",
      imageUrl: projImg6,
      githubLink: "https://github.com/yemregumus/IntelliCycles",
    },
  ];

  const softwareProjects = [
    {
      title: "Insurance Claim Management Application",
      description: "The application is built using ASP.NET Core Razor Pages for a robust web framework and C# for backend logic. Entity Framework Core simplifies database interactions with MySQL for reliable data storage.",
      githubLink: "https://github.com/yemregumus/insuranceClaimManagementApp",
      imageUrl: projImg7,
    },
    {
      title: "World Countries App",
      description: "The project leverages Angular and Ionic for building a cross-platform application that can run on web and mobile devices, utilizing Capacitor for native capabilities.",
      githubLink: "https://github.com/yemregumus/MobileApp-Dev/tree/main/WorldCountriesApp/world-countries-app",
      imageUrl: projImg8,
    },
    {
      title: "Fragments MicroService UI (Frontend)",
      description: "This UI provides an intuitive interface for creating, editing, and deleting fragments.",
      githubLink: "https://github.com/yemregumus/fragments-ui",
      imageUrl: projImg9,
    },
    {
      title: "Fragments MicroService (Backend)",
      description: "The fragments microservice facilitates the management of text, image, and JSON data fragments within a distributed system.",
      githubLink: "https://github.com/yemregumus/fragments",
      imageUrl: projImg10,
    },
    {
      title: "Museum of Art New York Website (Backend)",
      description: "This backend server, built with Express.js, facilitates user authentication and data management for a web application.",
      githubLink: "https://github.com/yemregumus/a6Backend",
      imageUrl: projImg11,
    },
    {
      title: "Backend for My Portfolio Website's Contact Page",
      description: "This backend server, built with Node.js and Express.js, facilitates communication between clients and a designated email recipient.",
      githubLink: "https://github.com/yemregumus/pfContactAPI",
      imageUrl: projImg12,
    },
  ];

  const personalProjects = [
    {
      title: (
        <>
          Python Board
          <br />
          Game
        </>
      ),
      description: "This was my Data Structures and Algorithms project. It is a two-player board game implemented with Python, utilizing various data structures and algorithms for game logic, including linked lists, stacks, and queues for managing moves.",
      githubLink: "https://github.com/yemregumus/pythonBoardGame",
      imageUrl: projImg13,
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
                    {webProjects.map((webProjects, index) => {
                      return <ProjectCard key={index} title={webProjects.title} description={webProjects.description} imageUrl={webProjects.imageUrl} githubLink={webProjects.githubLink} linkToLive={webProjects.linkToLive} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {softwareProjects.map((softwareProjects, index) => {
                      return <ProjectCard key={index} title={softwareProjects.title} description={softwareProjects.description} imageUrl={softwareProjects.imageUrl} githubLink={softwareProjects.githubLink} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {personalProjects.map((personalProjects, index) => {
                      return <ProjectCard key={index} title={personalProjects.title} description={personalProjects.description} imageUrl={personalProjects.imageUrl} githubLink={personalProjects.githubLink} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
