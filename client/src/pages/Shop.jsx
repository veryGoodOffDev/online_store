import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getBrands, getDevices, getTypes } from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context) 

    useEffect(() => {
        getTypes().then(data => device.setTypes(data))
        getBrands().then(data => device.setBrands(data))
        getDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        getDevices(device.selectedType.id, device.selectedBrand.id, device.page, 6).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedBrand, device.selectedType])
    return (
       <Container>
        <Row>
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>
                <BrandBar/>
                <DeviceList/>
                <Pages/>
            </Col>
        </Row>
       </Container>
    )
})

export default Shop