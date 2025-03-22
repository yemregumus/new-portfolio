import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import PopupMessage from "./PopupMessage";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (status === "success" || status === "error") {
      setShowPopup(true);
      clearFields();
    }
  }, [status, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
      {showPopup && <PopupMessage message={message} onClose={() => setShowPopup(false)} />}
    </Col>
  );
};
