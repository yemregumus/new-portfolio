import { Col, Row, Container } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <MailChimpForm />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jonasgumusyyz/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/yemregumus" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>CopyRight 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
