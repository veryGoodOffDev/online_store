import React, { useContext, useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'
import BrandList from '../components/BrandList'
import DeviceList from '../components/DeviceList'
import { getBrands, getDevices, getTypes } from '../http/deviceApi'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const AdminPage = observer(() => {
    const {device} = useContext(Context)


    useEffect(() => {
        getTypes().then(data => device.setTypes(data))
        getBrands().then(data => device.setBrands(data))
        getDevices(null, null, 1, 100).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        getDevices(device.selectedType.id, device.selectedBrand.id, device.page, 100).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
            
        })
    }, [device.page, device.selectedBrand, device.selectedType])
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2 p-2' onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2' onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2' onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
            <BrandList/>
            <DeviceList/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    )
})

export default AdminPage