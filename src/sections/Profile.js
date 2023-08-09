import React, { useState } from "react";
import "../styles/profile.scss";
import UserIcon from "../assets/user.svg";

const ProfileSection = () => {
  const [name, setName] = useState("Talha Jibran");
  const [email, setEmail] = useState("talhajibrantariq@gmail.com");
  const [phone, setPhone] = useState("03010506169");

  return (
    <div className="profile-container">
      <img src={UserIcon} alt="profilePicture" className="profile-picture" />
      <p className="label-text">Username</p>
      <input
        className="input-text"
        placeholder="Enter Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="label-text">Email</p>
      <input
        className="input-text"
        placeholder="Enter Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="label-text">Mobile Number</p>
      <input
        className="input-text"
        placeholder="03XX-XXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className="save-button">Save</div>
    </div>
  );
};

export default ProfileSection;
