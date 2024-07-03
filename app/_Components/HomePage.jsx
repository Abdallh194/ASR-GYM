import React from "react";
import NavScroll from "./NavScroll";
import { TextField } from "@mui/material";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Socials from "./Socials";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="overlay">
        <NavScroll />
        <Container className="homePage-Content">
          <div className="head">
            <span>TRAIN HARD,</span> LIVE BETTER
          </div>
          <div className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            fugit quos nam corrupti ex eos quidem molestias quas, officia
            voluptatem dolorum saepe aspernatur? Eum illum placeat, velit
            impedit ipsam tempora? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Architecto fugit quos
          </div>
          <div className="register-form">
            <TextField
              required
              fullWidth
              id="email"
              label=" Email Address"
              name="email"
              autoComplete="email"
            />
            <Link href="/Login" className="submit">
              Register
            </Link>
          </div>
          <Socials />
          <div className="circle1">
            <div className="circle2"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
