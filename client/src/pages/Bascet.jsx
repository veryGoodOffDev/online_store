import React, { useContext, useEffect } from "react";
import "./cards.css";
import '../components/cart.css';
import CartItem from "../components/CartItem";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Bascet = observer(() => {
const {cart} = useContext(Context)
 const cartItems = JSON.parse(localStorage.getItem('cartItems'))
 console.log(cart.cart)
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
        {cart.cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
    </div>
  );
});

export default Bascet;
