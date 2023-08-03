import React, { useContext } from "react";
import { Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { Context } from "..";


const DeviceItem = ({item}) => {
    const navigate = useNavigate()
    const {device} = useContext(Context)
    console.log(item.brandId)
  return (
    <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + item.id)}>
        <Card style={{width:150, cursor: 'pointer'}} border = 'light' className="mt-2">
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + item.img}/>
            <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
                <div></div>
            <div className="d-flex align-items-center">
                <div className="mr-2">{item.rating}</div>
                <Image src={star} width={15}/>
            </div>
            </div>
            <div>{item.name}</div>

        </Card>
    </Col>
  );
};

export default DeviceItem;
