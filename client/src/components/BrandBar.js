import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device?.brands?.map((brand) => (
        <Card
          key={brand.id}
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand.id ? "success" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
          className="m-1 p-3 w-auto"
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
