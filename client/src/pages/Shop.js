import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <Container className="flex-nowrap" fluid>
      <Row className="flex-nowrap mt-2">
        <Col md={3} className="w-auto">
          <TypeBar />
        </Col>
        <Col md={9} className="w-auto">
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
