import React, { useContext, useState } from "react";
import { Modal, Button, Form, FormControl} from "react-bootstrap";
import { createBrand, getBrands } from "../../http/deviceApi";
import { Context } from "../..";

const CreateBrand = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name:value}).then(data =>  {
          getBrands().then(data => device.setBrands(data))
            setValue('')
            onHide()
        })
    }


  return (
    <Modal
    show={show}
    onHide={onHide}
    size="md"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавить новый бренд
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <FormControl value={value} onChange={e => setValue(e.target.value)} placeholder='Введите название типа'/>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button  variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
      <Button  variant={'outline-success'} onClick={addBrand}>Добавить</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default CreateBrand;