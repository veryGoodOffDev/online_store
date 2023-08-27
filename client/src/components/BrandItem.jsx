import React, { useContext, useState } from "react";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { deleteBrand, getBrands } from "../http/deviceApi";
import { Context } from "..";
import DeleteBrand from "./modals/DeleteBrand";

const BrandItem = ({ brand }) => {
  const {device} = useContext(Context)
  const [visibleDeleteBrand, setVisibleDeleteBrand] = useState(false)
  const [show, setShow] = useState(false)
  const removeBrand = (id) => {
    const isBrand = device.devices.find(d => d.brandId === id)
    if(isBrand) {
      setVisibleDeleteBrand(false)
      setShow(true)
      console.log('существуют товары с таким брендом')
    } else {
      console.log('удаляем бренд')
      // console.log(id, 'id brand')
      deleteBrand(id).then((data) => {
        console.log(data);
        getBrands().then((data) => {
          device.setBrands(data);
        });
      });
    }

  }

  const editBrand = (id) => {
    console.log(id, 'id brand')
  }
  return (
    <>
    <Row className="d-flex">
      <Col md={1} className="d-flex mt-2">
      {brand.name}
      </Col>
      <Col md={4}>
      <Button onClick={() => editBrand(brand.id)} variant='warning' className="m-1">Изменить</Button>
      <Button
       onClick={() => setVisibleDeleteBrand(true)}
      variant="danger" 
      className="m-1"
      >
        Удалить</Button>
      </Col>
    </Row>
    <DeleteBrand
    show={visibleDeleteBrand}
     brandName={brand.name} 
     onDelete={() => removeBrand(brand.id)}
     onHide={() => setVisibleDeleteBrand(false)}
     />
      {show? (  <Alert variant="danger" onClose={()=>setShow(false)} dismissible>
           <Alert.Heading>STOP STOP STOP!</Alert.Heading>
        <p>
          Вы не можете удалить бренд, пока существует хотя бы один товар с таким брендом
        </p>
     </Alert>):null}
    </>
  );
};

export default BrandItem;
