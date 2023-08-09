import React, { useState } from "react";
import moment from "moment";

import NotificationIcon from "../assets/images/SideBar/notification-icon.svg";
import SchedulerIcon from "../assets/images/SideBar/scheduler-icon.svg";
import NewMessageIcon from "../assets/images/SideBar/newMessage-icon.svg";
import MenuIcon from "../assets/images/SideBar/menu-icon.svg";
import SearchIcon from "../assets/images/SideBar/search-icon.svg";
import OthersIcon from "../assets/images/SideBar/OthersIcon.svg";
import OrdersIcon from "../assets/images/SideBar/OrdersIcon.svg";
import DiscountIcon from "../assets/images/SideBar/discountsIcon.svg";
import FamilyIcon from "../assets/images/SideBar/familyIcon.svg";
import FrequentsIcon from "../assets/images/SideBar/frequentsIcon.svg";
import ToursIcon from "../assets/images/SideBar/ToursIcon.svg";
import OfficeIcon from "../assets/images/SideBar/OfficeIcon.svg";
import PromosIcon from "../assets/images/SideBar/PromosIcon.svg";
import BillIcon from "../assets/images/SideBar/BillsIcon.svg";

import "../styles/SideBar.scss";
import { Button, Popover } from "antd";
// import CreateFolder from "./CreateFolder";
// import Settings from "../assets/settings.svg";
import RecentsIcon from "../assets/Recents.svg";
import SettingsIcon from "../assets/settings.svg";
import LogoutIcon from "../assets/Logout.svg";
import Settings from "./Settings";

const Header = (props) => {
  const content = (
    <div className="popmenu-div">
      <div className="menuItem-div">
        Recents <img src={RecentsIcon} alt="RecentsIcon" />
      </div>
      <div
        className="menuItem-div"
        onClick={props.showSettings}
        style={{ cursor: "pointer" }}
      >
        Settings
        <img src={SettingsIcon} alt="SettingsIcon" />
      </div>
      <div className="menuItem-div" style={{ color: "rgba(228, 83, 67, 1)" }}>
        Logout <img src={LogoutIcon} alt="LogoutIcon" />
      </div>
    </div>
  );
  return (
    <div className="header-container">
      <div className="name-and-phone-container">
        <p className="name-container">Salaam</p>
        <p className="phone-container">+92-32xxxxxxxxx</p>
      </div>
      <div className="header-buttons">
        <img
          src={NotificationIcon}
          style={{ width: "20px" }}
          alt="notification-icon"
        />
        <img
          src={SchedulerIcon}
          style={{ marginTop: 4, width: "22px" }}
          alt="scheduler-icon"
        />
        <img
          src={NewMessageIcon}
          style={{ width: "20px" }}
          alt="newMessage-icon"
        />
        <Popover
          placement="leftTop"
          content={content}
          color="rgba(1, 1, 3, 1)"
          width="200px"
          style={{
            backgroundColor: "rgba(1, 1, 3, 0.8)",
            // width:"80%",
          }}
          // title="title"
          trigger="click"
        >
          <img
            src={MenuIcon}
            style={{ width: "5px", cursor: "pointer" }}
            alt="menu-icon"
          />
        </Popover>
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
  const [folderindex, setFolderIndex] = useState();

  let foldersArray = [
    {
      name: "Others",
      imgSrc: OthersIcon,
      width: "15px",
    },
    {
      name: "Promos",
      imgSrc: PromosIcon,
      width: "25px",
    },
    {
      name: "Bills",
      imgSrc: BillIcon,
      width: "20px",
    },
    {
      name: "Discounts",
      imgSrc: DiscountIcon,
      width: "15px",
    },
    {
      name: "Bank",
      imgSrc: MenuIcon,
    },
    {
      name: "Family",
      imgSrc: FamilyIcon,
      width: "23px",
    },
    {
      name: "Orders",
      imgSrc: OrdersIcon,
      width: "23px",
    },
    {
      name: "Office",
      imgSrc: OfficeIcon,
      width: "30px",
    },
    {
      name: "Tours",
      imgSrc: ToursIcon,
      width: "24px",
    },
    {
      name: "Frequents",
      imgSrc: FrequentsIcon,
      width: "23px",
    },
    {
      name: "Cousins",
      imgSrc: ToursIcon,
      width: "24px",
    },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
    // {
    //   name: "Cousins",
    //   imgSrc: MenuIcon,
    // },
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
              <p
                className="folders-button"
                style={{
                  background: index === folderindex && "rgba(217, 255, 64, 1)",
                  color: index === folderindex && "rgba(35, 37, 41, 1)",
                }}
                onClick={() => {
                  setFolderIndex(index);
                }}
              >
                <img
                  src={item.imgSrc}
                  style={{
                    marginRight: "7px",
                    width: item.width ? item.width : "5px",
                    filter:
                      index === folderindex &&
                      "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(5611%) hue-rotate(133deg) brightness(97%) contrast(100%)",
                  }}
                  alt="foldersButton"
                />
                {item.name}
              </p>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const SideBar = (props) => {
  const [settingsShow, setSettingsShow] = useState(false);

  console.log("sidebar props are :::", props);

  if (settingsShow) {
    return <Settings hideSettings={() => setSettingsShow(false)} />;
  }

  return (
    <div className="sideBar-container">
      <Header showSettings={() => setSettingsShow(true)} />
      <BillCards />
      <Folder />
      <div className="create-folder-button-container">
        <Button
          onClick={() => {
            props.open(true);
          }}
          className="create-folder-button"
        >
          Create Folder +
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
