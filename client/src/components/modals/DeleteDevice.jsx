import React, { useState } from "react";
import { Modal, Button, Form, FormControl} from "react-bootstrap";
import { createType } from "../../http/deviceApi";

const DeleteDevice = ({show, onHide, onDelete, brandName, devName}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name:value}).then(data =>  {
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
        Удаление устройства
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        Вы уверены, что хотите удалить устройство {brandName} : {devName}
    </Modal.Body>
    <Modal.Footer>
      <Button  variant={'outline-warning'} onClick={onHide}>Отмена</Button>
      <Button  variant={'outline-danger'} onClick={onDelete}>Удалить</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default DeleteDevice;