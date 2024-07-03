import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={12} lg={6} className="Fooer-Card">
            <div className="head">ASR GYM community</div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ab
              est cumque rerum ratione temporibus necessitatibus, nemo id
              expedita vitae alias accusamus. Omnis, perspiciatis fugit adipisci
              totam aliquid temporibus amet.
            </div>
            <div className="Details">
              - dolor sit amet consectetur adipisicing
            </div>
            <div className="Details">
              - dolor sit amet consectetur adipisicing
            </div>
            <div className="Details">
              - dolor sit amet consectetur adipisicing
            </div>
            <div className="Details">
              - dolor sit amet consectetur adipisicing
            </div>

            <a
              href="https://wa.me/+201091415560"
              className="icon"
              target="_blanck"
            >
              <WhatsAppIcon fontSize="large" /> Chat Now
            </a>
          </Col>
          <Col md={12} lg={6} className="Fooer-Card">
            <div className="head">Communication Strategy</div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ab
              est cumque rerum ratione temporibus necessitatibus, nemo id
              expedita vitae alias accusamus. Omnis, perspiciatis fugit adipisci
              totam aliquid temporibus amet.
            </div>
            <div className="Details">
              - rerum ratione temporibus necessitatibus
            </div>
            <div className="Details">
              - rerum ratione temporibus necessitatibus
            </div>
            <div className="Details">
              - rerum ratione temporibus necessitatibus
            </div>
            <div className="Details">
              - rerum ratione temporibus necessitatibus
            </div>

            <a href="tel:+201091415560" target="_blnck" className="icon">
              <PhoneIcon fontSize="large" /> +20 109 141 5560
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
