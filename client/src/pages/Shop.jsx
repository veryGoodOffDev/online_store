import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getBrands, getDevices, getTypes } from "../http/deviceApi";
import Pages from "../components/Pages";
import '../pages/Shop.css';
import { getUsers } from "../http/userApi";

const Shop = observer(() => {
  const { device, cart, user } = useContext(Context);
  useEffect(() => {

    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => {
      device.setBrands(data);
    });
    getDevices(null, null, 1, 8).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
    getUsers().then((data) => {
      user.setUsers(data.rows)
      console.log(user.users)
    })
  }, []);

  useEffect(() => {
    if(localStorage.getItem('cartItems')) {
      cart.setCart(JSON.parse(localStorage.getItem('cartItems')))
      cart.setQuantityCartItems()
    }
  },[])

  useEffect(() => {
    if(device.page && device.selectedBrand && device.selectedType) {
      device.setIsLoading(true)
      getDevices(
        device.selectedType.id,
        device.selectedBrand.id,
        device.page,
        8
      ).then((data) => {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
        // device.setIsLoading(false)
      });
    }
    
  }, [device.page, device.selectedBrand, device.selectedType, user.isAuth]);
  return (
    <>
      {device.isLoading ? (
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
