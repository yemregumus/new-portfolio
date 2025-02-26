import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, githubLink, linkToLive }) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <div className="proj-imgbx">
        <img src={imageUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-btns d-flex gap-2 mt-2">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <Button variant="primary">GitHub</Button>
            </a>
            <a href={linkToLive} target="_blank" rel="noreferrer">
              <Button variant="success">Live</Button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
