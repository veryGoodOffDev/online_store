import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex mt-2">
        {device.devices.map(device => 
            <DeviceItem key={device.id} device={device}/>
            )}
    </Row>
  );
});

export default DeviceList;
