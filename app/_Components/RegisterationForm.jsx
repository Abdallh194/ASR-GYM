import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormRegister from "./FormRegister";

const RegisterationForm = () => {
  return (
    <div className="RegisterationForm">
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className="RegiserForm Form-Card">
            <div className="head">Join us now</div>
            <div className="desc">
              Get some exercise for free, and you can try it at home if you are
              unable to pay the monthly subscription
            </div>
            <FormRegister />
          </Col>
          <Col md={12} lg={6} className="RegiserForm">
            <Image
              src="/registerForm.jpg"
              alt="registerForm"
              width={800}
              height={800}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterationForm;
