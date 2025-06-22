import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="orders-container">
        {data.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-icon">
              <img src={assets.parcel_icon} alt="Parcel" />
            </div>

            <div className="order-details">
              <p className="order-items">
                {order.items
                  .map((item) => `${item.name} x${item.quantity}`)
                  .join(", ")}
              </p>
              <div className="order-meta">
                <p>
                  <strong>Items:</strong> {order.items.length}
                </p>
                <p>
                  <strong>Amount:</strong> ${order.amount}.00
                </p>
                <p className={`order-status ${order.status.toLowerCase()}`}>
                  <span>&#x25cf;</span> {order.status}
                </p>
              </div>
            </div>

            <div className="order-actions">
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
