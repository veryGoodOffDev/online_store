import React from "react";
import { Button, Row, Col} from "react-bootstrap";

const UserItem = ({ user }) => {

  return (
    <>
    <Row className="d-flex">
      <Col md={2} className="d-flex mt-2">
     email: {user.email} role: {user.role}

      </Col>
      <Col md={3}>
      <Button variant='warning' className="m-1">Изменить</Button>
      <Button
      variant="danger" 
      className="m-1"
      >
        Удалить</Button>
      </Col>
    </Row>
    </>
  );
};

export default UserItem;
