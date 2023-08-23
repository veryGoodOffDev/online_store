import React, { useEffect, useState } from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'
import star from '../assets/star.png'
import { getOneDevice } from '../http/deviceApi'
import { useParams } from 'react-router-dom'

const DevicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()

    useEffect(() => {
        getOneDevice(id).then(data => setDevice(data))
    }, [])
    return (    
       <Container className='mt-3'>
        <Row>
            <Col md={4}>
                <Image style={{objectFit:'cover'}} width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
            </Col>
            <Col md={4}>
                <Row className='d-flex flex-column align-items-center'>
                    <h2 style={{textAlign:'center'}}>{device.name}</h2>
                    <div 
                        className='d-flex justify-content-center align-items-center'
                        style={{background:`url(${star}) no-repeat center center`, with:240, height:240, backgroundSize:'contain', fontSize: 64}}
                    >
                        <div>
                            {device.rating}
                        </div>
                    </div>
                </Row>
                
            </Col>
            <Col md={4}>
                <Card className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height:300, fontSize:32, border: '5px solid lightgray'}}
                >
                    <h3>От: {device.price} руб.</h3>
                    <Button variant={'outline-dark'}>Add to cart</Button>

                </Card>
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
            <h1>Характеристики</h1>
                {device.info.map((info,index) =>
                    <Row key={info.id} style={{background: index % 2 ===0? 'lightgray': 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                    )}
            </Row>
       </Container>
    )
}

export default DevicePage