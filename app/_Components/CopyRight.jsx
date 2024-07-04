import React from "react";
import { Container } from "react-bootstrap";

const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <Container className="CopyRight ">
      <div className="">
        <b>ASR GYM</b> {year} ©, all rights reserved .
      </div>
      <div className="">
        It was designed and implemented by <b>Abdullah Sabry</b>
      </div>
    </Container>
  );
};

export default CopyRight;
