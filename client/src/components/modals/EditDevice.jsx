import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, FormControl, Dropdown, Row, Col} from "react-bootstrap";
import { Context } from "../..";
import { createDevice, editDevice, getBrands, getDevices, getTypes } from "../../http/deviceApi";
import { observer } from "mobx-react-lite";

const EditDevice = observer(({show, onHide, devId, devName, devPrice}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState(devName)
    const [price, setPrice] = useState(devPrice)

    const editItem = (id) => {
        editDevice(id, {name:name, price:price}).then((data) => {
            getDevices(null, null, 1, 8).then((data) => {
                device.setDevices(data.rows);
                device.setTotalCount(data.count);
              });
            onHide()
        })
    }

    const cancelEdit = () => {
        onHide()
        setName(devName)
        setPrice(devPrice)
    }


    useEffect(() => {
        getTypes().then(data => device.setTypes(data))
        getBrands().then(data => device.setBrands(data))
    }, [])

  return (
    <Modal
    show={show}
    onHide={onHide}
    size="md"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Изменение устройства
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            {/* <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type =>
                        <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown> */}
            {/* <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map(brand =>
                        <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown> */}
            <FormControl
                value={name}
                className="mt-3"
                placeholder="Введите новое название устройства"
                onChange={e => setName(e.target.value)}
            />
            <Form.Control
                value={price}
                className="mt-3"
                placeholder="Изменить стоимость"
                type="number"
                onChange={e => setPrice(Number(e.target.value))}
            />
            <hr/>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button  variant={'outline-warning'} onClick={() => cancelEdit()}>Отмена</Button>
      <Button  variant={'outline-success'} onClick={() => editItem(devId)}>Сохранить</Button>
    </Modal.Footer>
  </Modal>
  );
});

export default EditDevice ;