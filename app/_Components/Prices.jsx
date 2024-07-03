import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
const Prices = () => {
  return (
    <div className="Prices">
      <Container>
        <div className="head">Pricing</div>
        <Row className="desc-Row">
          <Col md={12} lg={6} className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            perspiciatis, commodi assumenda nisi libero iste molestiae deleniti
          </Col>
          <Col md={12} lg={3} className="powers">
            <p>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
          </Col>
          <Col md={12} lg={3} className="powers">
            <p>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={4} className="NewsCard GoldCard">
            <div className="cardHeader">STARTER</div>
            <div className="price">
              50$ <small>/mo</small>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              neque
            </div>
            <hr />
            <div className="popular">Popular</div>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "red" }}>
              <ClearIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "red" }}>
              <ClearIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "red" }}>
              <ClearIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <div className="register more">Register</div>
          </Col>
          <Col md={12} lg={4} className="NewsCard">
            <div className="cardHeader">REGULAR</div>
            <div className="save">Save 25%</div>
            <div className="price">
              70$ <small>/mo</small>
            </div>

            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              neque
            </div>
            <hr />
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "red" }}>
              <ClearIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "red" }}>
              <ClearIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <div className="register more">Register</div>
          </Col>
          <Col md={12} lg={4} className="NewsCard">
            <div className="cardHeader">PLUS</div>
            <div className="price">
              107$ <small>/mo</small>
            </div>

            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              neque
            </div>
            <hr />
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <p style={{ color: "green" }}>
              <CheckIcon className="icon" /> Lorem ipsum dolor sit amet
            </p>
            <div className="register more">Register</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Prices;
