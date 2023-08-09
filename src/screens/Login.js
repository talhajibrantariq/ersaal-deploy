import React from "react";
import "../styles/login.scss";
import QrCode from "../assets/qrCode.svg";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
// import { QRCode } from "antd";

const Login = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="login-container">
      <img src={Logo} className="logo-img" alt="site-logo" />
      <div className="QrCode-container">
        <div className="left-div">
          <p className="heading-text-login">Use Ersaal on your Computer</p>
          <p className="points-text">1- Open Ersaal on your phone</p>
          <p className="points-text">
            2- Tap Menu or Settings and Select Linked Devices
          </p>
          <p className="points-text">3- Tap on link a device</p>
          <p className="points-text">
            4- Point your phone to capture this QR code
          </p>
        </div>
        <div className="right-div">
          <img
            src={QrCode}
            className="QRCode-Img"
            alt="qr-code"
            onClick={navigateToHome}
          />
          {/* <QRCode
            type="svg"
            size={230}
            errorLevel={"H"}
            value="https://ant.design/"
            icon="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-whatsapp-1.png"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
