import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const finalTotal = getTotalCartAmount() + deliveryFee;

  const [suggestedItem, setSuggestedItem] = useState(null);

  useEffect(() => {
    const availableItems = food_list.filter((item) => !cartItems[item._id]);
    if (availableItems.length > 0) {
      const random = Math.floor(Math.random() * availableItems.length);
      setSuggestedItem(availableItems[random]);
    }
  }, [cartItems, food_list]);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) =>
          cartItems[item._id] > 0 ? (
            <div className="cart-items-title cart-items-item" key={item._id}>
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p
                onClick={() => removeFromCart(item._id)}
                className="cross"
                title="Remove"
              >
                ×
              </p>
            </div>
          ) : null
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <hr />
          <div className="cart-total-details total-bold">
            <b>Total</b>
            <b>${finalTotal}</b>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it below:</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Apply</button>
          </div>

          <div className="cart-delivery-estimate">
            <p>
              ⏱️ Estimated Delivery: <strong>30–45 mins</strong>
            </p>
          </div>

          {suggestedItem && (
            <div className="cart-suggestion">
              <h4>👩🏻‍🍳 Chef’s Special Suggestion!</h4>
              <div className="suggestion-card">
                <img
                  src={`${url}/images/${suggestedItem.image}`}
                  alt={suggestedItem.name}
                />
                <div>
                  <h5>{suggestedItem.name}</h5>
                  <p>${suggestedItem.price}</p>
                  <button onClick={() => navigate("/")}>View Item</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
