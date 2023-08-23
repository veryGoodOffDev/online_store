import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getBrands, getDevices, getTypes } from "../http/deviceApi";
import Pages from "../components/Pages";
import '../pages/Shop.css'

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => {
      console.log(data);
      device.setBrands(data);
    });
    getDevices(null, null, 1, 10).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    getDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      10
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
      console.log(data.rows);
      setIsLoading(false)
    });
  }, [device.page, device.selectedBrand, device.selectedType]);
  return (
    <>
      {isLoading ? (
        <div className="spinner__container">
        <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <Container>
          <Row>
            <Col md={3}>
              <TypeBar />
            </Col>
            <Col md={9}>
              <BrandBar />
              <DeviceList />
              <Pages />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
});

export default Shop;
