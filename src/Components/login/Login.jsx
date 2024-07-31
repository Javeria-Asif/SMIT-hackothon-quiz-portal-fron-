import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import loginImage from "./smit.png"; 




const Login = () => {
  return (
    <div className="loginPage">
      <img src={loginImage} alt="Login" className="loginImage" />
      <div className="addUser">
        <h3>Login</h3>
        <form className="addUserForm">
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="login">
          <p>Don't have Account? </p>
          <Link to="/" className="btn btn-success">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;