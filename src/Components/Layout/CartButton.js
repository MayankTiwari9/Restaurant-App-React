import React, { useContext } from 'react'
import "./CartButton.css";
import CartIcon from './CartIcon'
import CartContext from '../../store/cart-context';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className='button'>
      <span className='icon'>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  )
}

export default CartButton
