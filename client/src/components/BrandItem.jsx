import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const BrandItem = ({ brand }) => {
  const removeBrand = (id) => {
    console.log(id, 'id brand')
  }

  const editBrand = (id) => {
    console.log(id, 'id brand')
  }
  return (
    <Row className="d-flex">
      <Col md={1} className="d-flex mt-2">
      {brand.name}
      </Col>
      <Col md={4}>
      <Button onClick={() => removeBrand(brand.id)} variant='warning' className="m-1">Изменить</Button>
      <Button onClick={() => editBrand(brand.id)} variant="danger" className="m-1">Удалить</Button>
      </Col>
    </Row>
  );
};

export default BrandItem;
