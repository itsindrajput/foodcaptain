import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let endpoint =
      currState === "Login" ? "/api/user/login" : "/api/user/register";
    try {
      const response = await axios.post(`${url}${endpoint}`, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-header">
          <h2>
            {currState === "Login" ? "Welcome Back 👋" : "Create an Account"}
          </h2>
          <img
            src={assets.cross_icon}
            alt="Close"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Full Name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit">
          {currState === "Login" ? "Login" : "Sign Up"}
        </button>

        <div className="login-popup-terms">
          <input type="checkbox" required />
          <p>
            By continuing, you agree to our <strong>Terms</strong> and{" "}
            <strong>Privacy Policy</strong>.
          </p>
        </div>

        <div className="login-popup-toggle">
          {currState === "Login" ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
