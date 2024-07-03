import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "./Categories";

const WhoWe = () => {
  return (
    <div className="WhoWe">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={5} className="Who-Crad Image-Card">
            <Image
              src="/who.png"
              alt="who image"
              width={800}
              height={500}
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={12} lg={7} className="Who-Crad Info-Card">
            <h5 style={{ textDecoration: "underLine" }}>WHO WE ARE</h5>
            <div className="head">
              We offer you the best private trainer for you, and they will
              follow you moment by moment
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium, ad eius sint vero iure numquam labore voluptas facilis
              maxime amet exercitationem corporis veritatis accusamus omnis non
              nostrum rem. Natus, aut?
            </div>
            <div className="more">Read More</div>
          </Col>
        </Row>
      </Container>
      <Categories />
    </div>
  );
};

export default WhoWe;
