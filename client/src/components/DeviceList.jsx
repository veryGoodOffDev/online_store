import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  device.brands.map(b => console.log(b.name))
  return (
    <Row className="d-flex mt-2">
        {device.devices.map(dev => 
            <DeviceItem key={dev.id} dev={dev} brandId={dev.brandId}/>
            )}
    </Row>
  );
});

export default DeviceList;
