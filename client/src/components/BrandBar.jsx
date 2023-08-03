import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Col className="d-flex mt-2">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand.id ? "success" : "none"}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
          className="p-3"
        >
          {brand.name}
        </Card>
      ))}
    </Col>
  );
});

export default BrandBar;
