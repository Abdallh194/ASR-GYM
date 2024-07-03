import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "next/link";
const Blogs = () => {
  return (
    <div className="Blogs">
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={6} className="Blogs-Card Info-Card">
            <div className="Icons">
              <div className="icon-container">
                <FitnessCenterIcon className="icon" />
                <span>Latest Devices</span>
              </div>
              <div className="icon-container">
                <BuildCircleIcon className="icon" />
                <span>Device Maintenance</span>
              </div>
              <div className="icon-container">
                <ElectricBikeIcon className="icon" />
                <span>Electrical Device</span>
              </div>
              <div className="icon-container">
                <AcUnitIcon className="icon" />
                <span>Central Air-Conditioning</span>
              </div>
            </div>
            <div className="tripleX">X X X</div>
            <div className="head">
              Return To The Gym for <span>Better Life</span>
            </div>
            <div className="sub-head">Respect Security Measures</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              incidunt. Eveniet assumenda aperiam porro laboriosam dolores alias
              esse, earum officiis, perferendis voluptate ad culpa nemo aliquid
              minima quisquam ea dignissimos.
            </div>
            <Link href="Register" className="register more">
              Register
            </Link>
          </Col>
          <Col xs={12} md={12} lg={6} className="Blogs-Card Image-Card">
            <Image
              src="/blog.jpg"
              alt="blog image"
              width={900}
              height={500}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
