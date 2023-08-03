import React from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'
import star from '../assets/star.png'

const DevicePage = () => {
    const device = {id:1, name:'Iphone 12', price:100200, rating: 5, img: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80'}

    const description = [
        {id:1, title: 'Оперативная память', description: '5Гб'},
        {id:1, title: 'Камера', description: '12Мп'},
        {id:1, title: 'Процессор', description: 'icore i8'},
        {id:1, title: 'Кол-во ядер', description: '12'},
        {id:1, title: 'Аккумулятор', description: '20000'},
    ]
    return (    
       <Container className='mt-3'>
        <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
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
                {description.map((info,index) =>
                    <Row key={info.id} style={{background: index % 2 ===0? 'lightgray': 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                    )}
            </Row>
       </Container>
    )
}

export default DevicePage