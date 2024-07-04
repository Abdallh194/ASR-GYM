import React from "react";
import Service from "../_Components/Service";
import RegisterationForm from "../_Components/RegisterationForm";

const Register = () => {
  return (
    <>
      <div className="Register">
        <div className="overlay">
          <div className="content">
            <div className="head"> Power GYM</div>
            <div className="desc">
              ASR Gym for military rehabilitation and treatment of thinness and
              obesity in men and women
            </div>
          </div>
        </div>
      </div>
      <Service />
      <RegisterationForm />
    </>
  );
};

export default Register;
