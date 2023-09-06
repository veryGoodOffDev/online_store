import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";

const UsersList = observer(() => {
  const { user } = useContext(Context);
  return (
    <Row className="d-flex mt-2">
        <h2>Users</h2>
    </Row>
  );
});

export default UsersList;
