import React from "react";
import { Row} from "react-bootstrap";


const BrandItem = ({brand}) => {
  return (
    <Row>
        {brand.name}
    </Row>
  );
};

export default BrandItem;
