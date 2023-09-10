import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import UserItem from "./UserItem";

const UsersList = observer(() => {
  const { user } = useContext(Context);
  return (
    <Row className="d-flex mt-2">
      <h2>Пользователи</h2>
      {user.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Row>
  );
});

export default UsersList;
