"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Socials from "../_Components/Socials";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import ReportIcon from "@mui/icons-material/Report";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import LogoutIcon from "@mui/icons-material/Logout";
import CrditCardForm from "../_Components/CrditCardForm";
import { ActiveLogout } from "../_Redux/features/StoreSlice";
import { useRouter } from "next/navigation";
const UserProfile = () => {
  let { newuser, isLoggin } = useSelector((s) => s.ASR);
  let [openPaymentMethod, setopenPaymentMethod] = useState(false);
  let dispatch = useDispatch();
  let router = useRouter();
  return (
    <div className="UserProfile">
      {isLoggin ? (
        <Container fluid>
          <Row>
            <Col className="leftSideBar" md={12} lg={3}>
              <Link href="/" className="logo">
                <FitnessCenterIcon className="icon" />
                <span className="pt_01">ASR</span>
                <span className="pt_02"> GYM</span>
              </Link>
              <div className="menu">
                <div className="head">
                  <AccountCircleIcon /> Personal Details
                </div>
                <div className="head">
                  <CardMembershipIcon /> Pay for the Subscription
                </div>
                <div className="head">
                  <AddLocationAltIcon /> Your Nearest Branch
                </div>
                <div className="head">
                  <SportsGymnasticsIcon /> Special Exercises
                </div>
                <div className="head">
                  <ReportIcon /> Report a Problem
                </div>
              </div>
              <Socials />
            </Col>
            <Col className="RightSideBar" md={12} lg={9}>
              <div className="linerImage">
                <div className="overlay">
                  {newuser.NewFirstName} {newuser.NewLastName}
                </div>
              </div>
              <Avatar className="avatar"></Avatar>
              <div className="content">
                <div className="head">Personal Information</div>
                <div
                  className="logout"
                  onClick={() => {
                    dispatch(ActiveLogout());
                    router.push("/");
                  }}
                >
                  Logout <LogoutIcon />{" "}
                </div>
                <div className="personalInfo">
                  <div className="details">
                    <div className="details-head">First Name</div>
                    <div className="details-desc"> {newuser.NewFirstName}</div>
                  </div>
                  <div className="details">
                    <div className="details-head">Last Name</div>
                    <div className="details-desc"> {newuser.NewLastName}</div>
                  </div>
                  <div className="details">
                    <div className="details-head">
                      Classification of bodyBuilders
                    </div>
                    <div className="details-desc"> Beginner</div>
                  </div>
                </div>
                <hr />

                <div className="personalInfo">
                  <div className="details">
                    <div className="details-head">Email</div>
                    <div className="details-desc"> {newuser.NewEmail}</div>
                  </div>
                  <div className="details">
                    <div className="details-head">Phone Number</div>
                    <div className="details-desc"> {newuser.NewPhone}</div>
                  </div>
                </div>
                <hr />

                <div className="personalInfo">
                  <div className="details">
                    <div className="details-head">Weight</div>
                    <div className="details-desc"> {newuser.NewWeight} KG</div>
                  </div>
                  <div className="details">
                    <div className="details-head">Hight</div>
                    <div className="details-desc"> {newuser.NewHight} CM</div>
                  </div>
                  <div className="details">
                    <div className="details-head">Age</div>
                    <div className="details-desc"> {newuser.NewAge} Year</div>
                  </div>
                </div>
                <hr />

                <div className="personalInfo">
                  <div className="details">
                    <div className="details-head">Subscribtion Type</div>
                    <div className="details-desc">
                      {" "}
                      {newuser.NewSubscribtion_Type}{" "}
                      {newuser.is_Subscribtion_Active == true ? (
                        <span style={{ color: "green" }}>
                          {" "}
                          <b>
                            <CheckIcon /> Activated
                          </b>
                        </span>
                      ) : (
                        <span style={{ color: "red" }}>
                          <b>
                            {" "}
                            <ClearIcon /> Not Activated
                          </b>
                        </span>
                      )}
                    </div>
                  </div>
                  {newuser.is_Subscribtion_Active == true ? (
                    ""
                  ) : (
                    <div className="details">
                      <div className="details-head">Subscribtion Payment</div>
                      <div className="details-desc">
                        You Must Pay The Monthly Gym Subscribtion Fisrt
                        <Link
                          href="#PaymentMethod"
                          className="activationBtn "
                          onClick={() => {
                            setopenPaymentMethod(true);
                          }}
                        >
                          Active Now
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <hr />
                {openPaymentMethod == true &&
                newuser.is_Subscribtion_Active == false ? (
                  <>
                    <div className="head">Billing Information</div>
                    <CrditCardForm
                      setopenPaymentMethod={setopenPaymentMethod}
                    />{" "}
                  </>
                ) : openPaymentMethod == false &&
                  newuser.is_Subscribtion_Active == true ? (
                  ""
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        router.push("/Register")
      )}
    </div>
  );
};

export default UserProfile;
