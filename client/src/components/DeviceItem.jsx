import React, { useContext } from "react";
import { Button, Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { Context } from "..";



const DeviceItem = ({dev, brandId}) => {
    const navigate = useNavigate()
    const {device} = useContext(Context)
    const {user} = useContext(Context)
    const getNameBrand = () => {
        return  device.brands.find(b => b.id === brandId)
    }

    

  return (
    <Col md={3}>
        <Card style={{width:150, cursor: 'pointer'}} border = 'light' className="mt-2" onClick={() => navigate(DEVICE_ROUTE + '/' + dev.id)}>
            <Image style={{objectFit:'cover'}} width={150} height={150} src={process.env.REACT_APP_API_URL + dev.img}/>
            <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
                <div>{getNameBrand().name}</div>
            <div className="d-flex align-items-center">
                <div className="m-2">{dev.rating}</div>
                <Image src={star} width={15}/>
            </div>
            </div>
            <div>{dev.name}</div>
            <div className="d-flex justify-content-center" style={{border:'1px solid lightgray'}}>{dev.price} руб</div>
        </Card>
        {user.isAuth && 
            <div  className="d-flex justify-content-around">
            <Button className="m-1" size="sm" variant="danger">Удалить</Button>
            <Button className="m-1" size="sm" variant="warning">Изменить</Button>
            </div>
            }
    </Col>
  );
};

export default DeviceItem;
