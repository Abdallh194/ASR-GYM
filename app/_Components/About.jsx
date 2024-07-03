import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
const About = () => {
  return (
    <div className="About">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={5} className="About-Card Image-Card">
            <Image
              src="/about.jpg"
              alt="about"
              width={470}
              height={600}
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={12} lg={7} className="About-Card Info-Card">
            <div className="head">
              About <span>ASR GYM</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              tempora dolores quos iure modi nobis tempore voluptates officiis
              esse ipsa doloremque expedita, voluptatum obcaecati! Doloremque
              unde perferendis alias illo facere.
            </div>
            <div className="membership">
              <p>
                <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
              <p>
                <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
              <p>
                <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
              <p>
                <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
              <p>
                <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
            </div>
            <div className="more">Read More</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
