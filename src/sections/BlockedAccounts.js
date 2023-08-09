import React from "react";
import "../styles/BlockedAccounts.scss";
import userIcon from "../assets/userIcon.svg";

const BlockedAccounts = () => {
  const dummyData = [
    {
      name: "Kamran Sohail",
      number: "0312-12345678",
    },
    {
      name: "Sana Rehman",
      number: "0312-12345678",
    },
    {
      name: "Asim Khan",
      number: "0312-12345678",
    },
    {
      name: "Ahmed Kamran",
      number: "0312-12345678",
    },
    {
      name: "Humaira Imran",
      number: "0312-12345678",
    },
  ];

  return (
    <div className="profile-container">
      {dummyData.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <img
            src={userIcon}
            alt="user-icon"
            style={{
              width: 52,
              height: 52,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "initial",
              marginTop: 8,
              marginLeft: 4,
            }}
          >
            <p className="name-blocked">{item.name}</p>
            <p className="number-blocked">{item.number}</p>
          </div>
        </div>
      ))}
      <div className="dotted-button">Create Folder +</div>
    </div>
  );
};

export default BlockedAccounts;
