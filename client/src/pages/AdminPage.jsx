import React from 'react'
import { Button, Container } from 'react-bootstrap'

const AdminPage = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2 p-2'>Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2'>Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2'>Добавить устройство</Button>
        </Container>
    )
}

export default AdminPage