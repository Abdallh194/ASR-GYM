import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EastIcon from "@mui/icons-material/East";
const Service = () => {
  return (
    <div className="Service">
      <Container>
        <div className="head">Our Services</div>
        <div className="desc">
          We offer you the best private trainer for you, and they will follow
          you moment by moment and provide you with the best diet for your
          condition
        </div>
        <Row>
          <Col md={12} lg={4} className="Service-Card">
            <div className="leftCard Gary">
              <div className="header">BodyBuilding</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <div className="subscribe">
                Subscribe <EastIcon />
              </div>
            </div>
            <div className="leftCard Blue">
              <div className="header">Thinness and obesity</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <div className="subscribe">
                Subscribe <EastIcon />
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} className="Service-Card">
            <Image
              src="/service.png"
              alt="service image"
              width={400}
              height={400}
              className="img-fluid"
            />
          </Col>
          <Col md={12} lg={4} className="Service-Card">
            <div className="leftCard Dark">
              <div className="header">Thinness and obesity</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <div className="subscribe">
                Subscribe <EastIcon />
              </div>
            </div>
            <div className="leftCard Gold">
              <div className="header">Thinness and obesity</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <div className="subscribe">
                Subscribe <EastIcon />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
