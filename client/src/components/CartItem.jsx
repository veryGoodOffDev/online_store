import React, { useContext, useState } from "react";
import { Context } from "..";

const CartItem = ({ name, price, img, id, quantity}) => {
  const {cart, device} = useContext(Context)

  const removeCartItem = (id) => {
    cart.removeOne(id)
    cart.setQuantityCartItems()
    localStorage.setItem('cartItems', JSON.stringify(cart.cart))
  }

  const increaseCartItem = (id) => {
    cart.increaseQuantity(id)
    cart.setQuantityCartItems()
    localStorage.setItem('cartItems', JSON.stringify(cart.cart))
  }

  const decreaseCartItem = (id) => {
    cart.decreaseQuantity(id)
    cart.setQuantityCartItems()
    localStorage.setItem('cartItems', JSON.stringify(cart.cart))
  }

  const changeQuantity = (e) => {
  
  }

  return (
    <div className="item">
      <div className="buttons">
        <span className="delete-btn-q" onClick={() => removeCartItem(id) }></span>
        <span className="like-btn-q"></span>
      </div>
      <div className="item__image-container">
        <div className="item-image">
          <img src={process.env.REACT_APP_API_URL + img} alt={name} />
        </div>
      </div>
      <div className="description">
        <span>{name}</span>
      </div>

      <div className="quantity">
        <button className="plus-btn-q" type="button" name="button" onClick={() => increaseCartItem(id)}>
          <svg>
            <g>
              <path
                d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
              />
            </g>
          </svg>
        </button>
        <input type="text" name="name" value={quantity} onChange={(e) => changeQuantity(e)} min={1}/>
        <button className="minus-btn-q" disabled={quantity === 0 && true} type="button" name="button" onClick={() => decreaseCartItem(id)} >
          <img src="minus.svg" alt="" />
        </button>
      </div>

      <div className="total-price">{price * quantity}</div>
    </div>
  );
};

export default CartItem;
