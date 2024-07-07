import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavScrollExample from "../_Components/NavScroll";
import DoExercise from "../_Components/DoExercise";

const Exercise = () => {
  return (
    <>
      <div className="Exercise">
        <Container fluid>
          <NavScrollExample />
          <Row>
            <Col md={12} lg={6} className="Info-Card">
              <div className="head">
                <span>Build</span> Your Body For Healthy Life And{" "}
                <span>Best </span> <span>Life</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                libero repellendus laboriosam culpa est quas odit id corrupti
                dolore nisi ipsam quae aut fugiat in mollitia iure, enim veniam
                soluta.
              </div>
              <div className="customer-Number">
                <div className="details">
                  <div className="num">+50k</div>
                  <div className="number-head">Our Customer</div>
                </div>
                <div className="details">
                  <div className="num">+15</div>
                  <div className="number-head">Year Experience</div>
                </div>
                <div className="details">
                  <div className="num">+3k</div>
                  <div className="number-head">Personal Trainers</div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6} className="Image-Card">
              <Image
                src="/exercise.png"
                alt="exercise"
                width={900}
                height={900}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <DoExercise />
    </>
  );
};

export default Exercise;
