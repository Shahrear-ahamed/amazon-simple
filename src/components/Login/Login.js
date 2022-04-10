import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import google from "../../assets/photo/Fixed.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // get and set input data
  const handleEmailBlur = (e) => setEmail(e.target.value);
  const handlePasswordBlur = (e) => setPassword(e.target.value);

  const handleLoginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  // navigate home page
  user && navigate("/shop");
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">login</h2>
        <form onSubmit={handleLoginUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" required />
          </div>
          {loading && <p>Loading...</p>}
          <button className="form-submit" type="submit">
            Login
          </button>
        </form>
        <p className="account">
          New to Ema-jhon?
          <Link className="form-link" to="/register">
            Create an account
          </Link>
        </p>
        <div className="or-div">
          <span className="bar"></span>
          <p>or</p>
          <span className="bar"></span>
        </div>
        <Link className="signin" to="/register">
          <img src={google} alt="google-photos" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
