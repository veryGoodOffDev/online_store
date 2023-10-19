import React, { useContext, useEffect } from "react";
import "./cards.css";
import '../components/cart.css';
import CartItem from "../components/CartItem";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Bascet = observer(() => {
const {cart} = useContext(Context)
const clearCart = () => {
  cart.clearCart()
  cart.setQuantityCartItems()
  localStorage.setItem('cartItems', JSON.stringify(cart.cart))
}

useEffect(() => {
  if(localStorage) {
    cart.setCart(JSON.parse(localStorage.getItem('cartItems')))
    cart.setQuantityCartItems()
  }
},[])
  return (
    <div className="shopping-cart">
      <div className="title">{cart.cart?.length === 0 ? 'Shopping cart is empty': 'Shopping cart'}</div>
        {cart.cart?.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        {cart.cart?.length > 0 && 
        <>
        <h3>Итого:</h3>
        <button className="cart__clear" onClick={() => clearCart() }>Очистить корзину</button>
        </>
         }
    </div>
  );
});

export default Bascet;
