import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/images/star.svg";

const DeviceItem = ({ device }) => {
  return (
    <Col md={3} className="">
      <Card style={{ width: 150, cursor: "pointer" }} border="light">
        <Image width={150} height={150} src={device.img} />
        <div className="d-flex justify-content-between align-items-center">
          <div>Samsung</div>
          <div>
            <div>{device.rating}</div>
            <Image src={star} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
