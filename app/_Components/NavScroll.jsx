"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Avatar } from "@mui/material";
function NavScrollExample() {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Link href="/" className="logo">
          <FitnessCenterIcon className="icon" />
          <span className="pt_01">ASR</span>
          <span className="pt_02"> GYM</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 links"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/" className="Active">
              Home
            </Link>
            <Link href="#About">Who We Are</Link>
            <Link href="#Blog">Blog</Link>
            <Link href="#Pricing"> Pricing</Link>
            <Link href="/Exercise"> Exercise</Link>
          </Nav>
          <div className="d-flex contacts">
            <Link href="/Contact" className="btn">
              Contact
            </Link>
            <Avatar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
