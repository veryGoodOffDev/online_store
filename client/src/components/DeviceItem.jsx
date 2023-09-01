import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { Context } from "..";
import { deleteDevice, getDevices } from "../http/deviceApi";
import DeleteDevice from "./modals/DeleteDevice";
import EditDevice from "./modals/EditDevice";
import "../pages/cards.css";

const DeviceItem = ({ dev, brandName }) => {
  const { user, device, cart } = useContext(Context);
  const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false);
  const [editDeviceVisible, setEditDeviceVisible] = useState(false);

  const deleteItem = (id) => {
    deleteDevice(id).then((data) => {
      getDevices(null, null, 1, 100).then((data) => {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      });
    });
  };
  const editItem = (id) => {
    setEditDeviceVisible(true);
    console.log(id, "id устройства, изменение");
  };

  const addToCart = (item) => {
  if(cart.cart.find(i => i.id === item.id)) {
    cart.increaseQuantity(item.id)
    cart.setQuantityCartItems()
    localStorage.setItem('cartItems', JSON.stringify(cart.cart))
  } else {
    cart.addOne(item)
    cart.setQuantityCartItems()
    localStorage.setItem('cartItems', JSON.stringify(cart.cart))
  }
  }

  return (
    <>
      <div className="card__product">
        <div className="card__top">
          <NavLink to={DEVICE_ROUTE + "/" + dev.id} className="card__image">
            <img src={process.env.REACT_APP_API_URL + dev.img} alt={dev.name} />
          </NavLink>
          <div className="card__label">{brandName.name}</div>
        </div>
        <div className="card__bottom">
          <div className="card__prices">
            {/* <div className="card__price card__price--discount">135 000</div> */}
            <div className="card__price card__price--common">{dev.price}</div>
          </div>
          <NavLink to={DEVICE_ROUTE + "/" + dev.id} className="card__title">
            {dev.name}
          </NavLink>
          <button className="card__add"
          onClick={() => addToCart(dev)}
          >
            В корзину{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </button>
          {user.isAuth && (
            <Card.Footer className="d-flex justify-content-between align-items-end">
              <Button
                onClick={() => setDeleteDeviceVisible(true)}
                className="m-1"
                size="sm"
                variant="danger"
              >
                Удалить
              </Button>
              <Button
                onClick={() => editItem(dev.id)}
                className="m-1"
                size="sm"
                variant="warning"
              >
                Изменить
              </Button>
            </Card.Footer>
          )}
        </div>
      </div>
      <DeleteDevice
        show={deleteDeviceVisible}
        onHide={() => setDeleteDeviceVisible(false)}
        onDelete={() => deleteItem(dev.id)}
        brandName={brandName.name}
        devName={dev.name}
      />
      <EditDevice
        show={editDeviceVisible}
        onHide={() => setEditDeviceVisible(false)}
        onEdit={() => editItem(dev.id)}
        devId={dev.id}
        devName={dev.name}
        devPrice={dev.price}
      />
    </>
  );
};

export default DeviceItem;
