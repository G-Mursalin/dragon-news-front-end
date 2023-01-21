import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav.js/RightSideNav";

const Main = () => {
  return (
    <main>
      <Header />
      <Container>
        <Row>
          <Col lg={2}>
            <LeftSideNav />
          </Col>
          <Col lg={7}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightSideNav />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
