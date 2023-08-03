import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  const clearFilter = () => {
    device.setSelectedType({})
    device.setSelectedBrand({})
  }
  return (
    <ListGroup className="mt-2">
      {device.types.map((type) => (
        <ListGroup.Item 
            style={{cursor:'pointer'}}
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
        >
            {type.name}
            </ListGroup.Item>
      ))}
      <Button className="mt-2" onClick={clearFilter}>Все товары</Button>
    </ListGroup>
  );
});

export default TypeBar;
