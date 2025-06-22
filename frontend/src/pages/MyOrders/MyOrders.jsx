import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const res = await axios.post(`${url}/api/order/userorders`, {}, {
        headers: { token },
      });
      setOrders(res.data.data || []);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="orders-wrapper">
      <h2 className="orders-title">📦 My Orders</h2>
      <div className="orders-container">
        {orders.length === 0 ? (
          <div className="no-orders">You haven’t placed any orders yet.</div>
        ) : (
          orders.map((order, index) => (
            <div className="order-card" key={index}>
              <div className="order-header">
                <img src={assets.parcel_icon} alt="Parcel Icon" />
                <div>
                  <p className="order-status">
                    <span className={`status-dot ${order.status.toLowerCase()}`} />
                    {order.status}
                  </p>
                  <p className="order-date">Placed on: {new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="order-body">
                <p className="order-items">
                  {order.items.map((item) => `${item.name} ×${item.quantity}`).join(", ")}
                </p>
                <div className="order-info">
                  <p><strong>Total:</strong> ${order.amount.toFixed(2)}</p>
                  <p><strong>Items:</strong> {order.items.length}</p>
                </div>
              </div>

              <div className="order-footer">
                <button onClick={fetchOrders}>🔁 Track Order</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
