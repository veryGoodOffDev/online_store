import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "..";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink
          to={SHOP_ROUTE}
          style={{ textDecoration: "none", color: "black" }}
        >
          Купи Продукт
        </NavLink>
        {user.isAuth ? (
          <Nav className=" my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Button variant={"outline-dark"}>Admin Panel</Button>
            <Button variant={"outline-dark"} className="ml-2">Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Button variant={"outline-dark"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
