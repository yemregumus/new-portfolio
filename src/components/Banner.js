// filepath: /d:/school_stuff/new-portfolio/src/components/Banner.js
import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const toRotate = useMemo(() => ["FullStack Developer", "React Developer", "Software Developer", "Web Developer", "Systems Designer"], []);
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState(toRotate[0]);

  useEffect(() => {
    const changeText = () => {
      setLoopNum((prevLoopNum) => (prevLoopNum + 1) % toRotate.length);
      setText(toRotate[loopNum]);
    };

    const interval = setInterval(changeText, 4000); // Change text every 4 seconds
    return () => clearInterval(interval);
  }, [loopNum, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="title">{`I am Yunus Emre`}</h1>
                  <div className="txt-rotate">
                    <span className="wrap">A {text}</span>
                  </div>
                  <div>
                    <p className="desc">I am a Full-Stack Developer with a passion for creating beautiful and functional user experiences.</p>
                  </div>
                  <HashLink smooth to="#connect" className="text-decoration-none">
                    <button>
                      Let's Connect <ArrowRightCircle size={21} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
