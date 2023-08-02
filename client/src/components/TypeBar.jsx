import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup className="mt-5">
      {device.types.map((type) => (
        <ListGroup.Item 
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
        >
            {type.name}
            </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
