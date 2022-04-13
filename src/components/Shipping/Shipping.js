import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const email = user?.email;

  const handleNameBlur = (e) => setName(e.target.value);
  const handleAddressdBlur = (e) => setAddress(e.target.value);
  const handlePhoneBlur = (e) => setPhone(e.target.value);

  // form prevent defaule
  const handleLoginUser = (e) => {
    e.preventDefault();
    const shipping = { name, address, phone, email };
    console.log(shipping);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Input Shipping Info</h2>
        <form onSubmit={handleLoginUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleNameBlur} type="text" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Name</label>
            <input value={email} readOnly type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Address</label>
            <input onBlur={handleAddressdBlur} type="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Phone Number</label>
            <input onBlur={handlePhoneBlur} type="password" required />
          </div>
          <input
            className="form-submit"
            type="submit"
            value="Add Shipping"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
