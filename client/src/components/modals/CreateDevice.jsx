import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  FormControl,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import { Context } from "../..";
import {
  createDevice,
  getBrands,
  getDevices,
  getTypes,
} from "../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => device.setBrands(data));
  }, []);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    console.log(number);
    setInfo(info.filter((i) => number !== i.number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => {
      onHide();
      getDevices(null, null, 1, 100).then((data) => {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      });
    });
    device.setSelectedType({});
    device.setSelectedBrand({});
    setName("");
    setPrice(0);
  };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Select aria-label="Default select example">
            <option aria-required>Выберите тип устройства</option>
            {device.types.map((type) => (
                <option
                 key={type.id}
                 onClick={() => device.setSelectedType(type)}
                >
                {type.name}
            </option>

            ))}
          </Form.Select>
          <Form.Select className="mt-3" color="primary" aria-label="Default select example" required>
            <option aria-required>Выберите бренд</option>
            {device.brands.map((brand) => (
                <option
                onClick={() => device.setSelectedBrand(brand)}
                key={brand.id}
                >
                {brand.name}
            </option>

            ))}
          </Form.Select>
          <Form.Control
            required
            value={name}
            className="mt-3"
            placeholder="Введите название устройства"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            value={price}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Form.Control onChange={selectFile} className="mt-3" type="file" />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-2">
              <Col md={4}>
                <Form.Control
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  value={i.title}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  value={i.description}
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
