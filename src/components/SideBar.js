import React from "react";
import moment from "moment";

import NotificationIcon from "../assets/images/SideBar/notification-icon.svg";
import SchedulerIcon from "../assets/images/SideBar/scheduler-icon.svg";
import NewMessageIcon from "../assets/images/SideBar/newMessage-icon.svg";
import MenuIcon from "../assets/images/SideBar/menu-icon.svg";
import SearchIcon from "../assets/images/SideBar/search-icon.svg";

import "../styles/SideBar.scss";
import { Button } from "antd";
const Header = ({ props }) => {
  return (
    <div className="header-container">
      <div className="name-and-phone-container">
        <p className="name-container">Salaam</p>
        <p className="phone-container">+92-32xxxxxxxxx</p>
      </div>
      <div className="header-buttons">
        <img src={NotificationIcon} style={{ width: "20px" }} />
        <img src={SchedulerIcon} style={{ marginTop: 4, width: "22px" }} />
        <img src={NewMessageIcon} style={{ width: "20px" }} />
        <img src={MenuIcon} style={{ width: "5px" }} />
      </div>
    </div>
  );
};

const BillCards = () => {
  return (
    <div className="billCards-container">
      <div className="billCard">
        <div className="billCard-left">
          <p className="text-one">Reminder</p>
          <h1 className="text-two">Payment Gas Bill</h1>
          <div className="billCard-tags">
            <p className="tags-text">Gas Bill</p>
            <p className="tags-text">Due Date</p>
            <p className="tags-text">Tommorrow</p>
          </div>
        </div>
        <div className="billCard-right">
          <p className="right-text-one">{moment(new Date()).format("DD")}</p>
          <p className="right-text-two">
            {moment(new Date()).format("MMMM 'YY")}
          </p>
          <p className="right-text-three">
            {moment(new Date()).format("dddd")}
          </p>
          <p className="right-text-four">{"Read SMS>"}</p>
        </div>
      </div>
      <div className="billCard">
        <div className="billCard-left">
          <p className="text-one">Reminder</p>
          <h1 className="text-two">Payment Gas Bill</h1>
          <div className="billCard-tags">
            <p className="tags-text">Gas Bill</p>
            <p className="tags-text">Due Date</p>
            <p className="tags-text">Tommorrow</p>
          </div>
        </div>
        <div className="billCard-right">
          <p className="right-text-one">{moment(new Date()).format("DD")}</p>
          <p className="right-text-two">
            {moment(new Date()).format("MMMM 'YY")}
          </p>
          <p className="right-text-three">
            {moment(new Date()).format("dddd")}
          </p>
          <p className="right-text-four">{"Read SMS>"}</p>
        </div>
      </div>
    </div>
  );
};

const Folder = () => {
  let foldersArray = [
    {
      name: "Others",
      imgSrc: MenuIcon,
    },
    {
      name: "Promos",
      imgSrc: MenuIcon,
    },
    {
      name: "Bills",
      imgSrc: MenuIcon,
    },
    {
      name: "Discounts",
      imgSrc: MenuIcon,
    },
    {
      name: "Bank",
      imgSrc: MenuIcon,
    },
    {
      name: "Family",
      imgSrc: MenuIcon,
    },
    {
      name: "Orders",
      imgSrc: MenuIcon,
    },
    {
      name: "Office",
      imgSrc: MenuIcon,
    },
    {
      name: "Tours",
      imgSrc: MenuIcon,
    },
    {
      name: "Frequents",
      imgSrc: MenuIcon,
    },
    {
      name: "Cousins",
      imgSrc: MenuIcon,
    },
  ];
  return (
    <div className="folder-container">
      <div className="folder-header-container">
        <p className="folder-header-text">Folders</p>
        <img src={SearchIcon} alt="SearchIcon" style={{ width: "20px" }} />
      </div>
      <div className="folders">
        {foldersArray.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <p className="folders-button">
                <img
                  src={item.imgSrc}
                  style={{ marginRight: "20px", width: "5px" }}
                />
                {item.name}
              </p>
            </React.Fragment>
          );
        })}
      </div>
      <div className="create-folder-button-container">
        <Button className="create-folder-button">Create Folder +</Button>
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="sideBar-container">
      <Header />
      <BillCards />
      <Folder />
    </div>
  );
};

export default SideBar;
