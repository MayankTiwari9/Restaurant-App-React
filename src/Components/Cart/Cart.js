import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = () => {
  const cartItems = [{ id: "1", name: "Sushi", totalAmount: 35.62 }];

  return (
    <Modal>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cart-items">
            <h3>{item.name}</h3>
            <div className="total">
              <h3>Total Amount</h3>
              <h3>{item.totalAmount}</h3>
            </div>
            <div className="actions">
              <button className="button--alt">Close</button>
              <button className=".button">Order</button>
            </div>
          </div>
        );
      })}
    </Modal>
  );
};

export default Cart;
