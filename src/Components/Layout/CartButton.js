import React from 'react'
import "./CartButton.css";
import CartIcon from './CartIcon'

const CartButton = () => {
  return (
    <button className='button'>
      <span className='icon'>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className='badge'>0</span>
    </button>
  )
}

export default CartButton
