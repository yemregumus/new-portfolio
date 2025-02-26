export const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <div className="proj-imgbx">
        <img src={imageUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
