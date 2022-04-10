import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import google from "../../assets/photo/Fixed.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // get and set input data
  const handleEmailBlur = (e) => setEmail(e.target.value);
  const handlePasswordBlur = (e) => setPassword(e.target.value);
  const handleConfirmPasswordBlur = (e) => setConfirmPassword(e.target.value);

  // set error between password & confirm password
  const handlePasswordCheck = () => {
    if (password !== confirmPassword) {
      setError("Password and confirm password do not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 caractare");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  user && navigate("/");

  // prevent form submit
  const handleCreateUser = (e) => e.preventDefault();
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" qrequired />
          </div>
          <div className="input-group">
            <label htmlFor="confirn-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              qrequired
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <button
            onClick={handlePasswordCheck}
            className="form-submit"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="account">
          Already have an account?
          <Link className="form-link" to="/login">
            Login
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

export default SignUp;
