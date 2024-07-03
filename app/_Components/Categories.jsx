import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CasinoIcon from "@mui/icons-material/Casino";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MissedVideoCallIcon from "@mui/icons-material/MissedVideoCall";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const CategoriesCard1 = ({ Icon, head }) => {
  return (
    <Col xs={12} md={6} lg={3} className="Categories-Card greenCard">
      <Icon className="icon" />
      <div className="head">{head}</div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        suscipit cupiditate amet nihil ducimus in. Quaerat,
      </div>
      <div className="learn">More</div>
    </Col>
  );
};
const CategoriesCard2 = ({ Icon, head }) => {
  return (
    <Col xs={12} md={6} lg={3} className="Categories-Card GoldCard">
      <Icon className="icon" />
      <div className="head">{head}</div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        suscipit cupiditate amet nihil ducimus in. Quaerat,
      </div>
      <div className="learn">More</div>
    </Col>
  );
};
const Categories = () => {
  return (
    <Container className="Categories-container">
      <Row className="Categories">
        <CategoriesCard1 Icon={CasinoIcon} head="You and your luck" />
        <CategoriesCard2 Icon={CheckBoxIcon} head="Professional trainers" />
        <CategoriesCard1 Icon={MissedVideoCallIcon} head="Training Live chat" />
        <CategoriesCard2 Icon={AddShoppingCartIcon} head="Distinctive Store" />
      </Row>
    </Container>
  );
};

export default Categories;
