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
import DeleteBrand from '../components/modals/DeleteBrand'
import UsersList from '../components/UsersList'
import { getUsers } from '../http/userApi'

const AdminPage = observer(() => {
    const {device, user} = useContext(Context)


    useEffect(() => {
        getTypes().then(data => device.setTypes(data))
        getBrands().then(data => device.setBrands(data))
        getDevices(null, null, 1, 100).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
        getUsers().then((data) => {
            user.setUsers(data.rows)
            console.log(user.users)
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
    const [deleteBrandVisible, setDeleteBrandVicible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2 p-2' onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2' onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2' onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
            <BrandList/>
            <UsersList/>
            <h2>Все продукты</h2>
            <DeviceList/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVicible(false)}/>
        </Container>
    )
})

export default AdminPage