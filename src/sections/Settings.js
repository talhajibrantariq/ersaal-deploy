import React, { useState } from "react";
import BackButtonIcon from "../assets/images/Chat/BackButtonIcon.svg";
import SearchIcon from "../assets/images/SideBar/search-icon.svg";
import ArrowIcon from "../assets/arrowIcon.svg";
import ProfileSecIcon from "../assets/Profile-sec-icon.svg";

import "../styles/Settings.scss";
import { Button } from "antd";
import ProfileSection from "./Profile";
import BlockedAccounts from "./BlockedAccounts";

const Settings = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showBlocked, setShowBlocked] = useState(false);

  const goBack = () => {
    if (showProfile || showBlocked) {
      if (showProfile) {
        setShowProfile(false);
      } else if (showBlocked) {
        setShowBlocked(false);
      }
    } else {
      props.hideSettings();
    }
  };

  return (
    <div className="settings-div">
      <div className="settings-header-div">
        <div className="settings-title-and-back-btn-div">
          <img
            onClick={goBack}
            src={BackButtonIcon}
            alt="back-button"
            style={{
              width: "12px",
              margin: "2px 2px 2px 20px",
              cursor: "pointer",
            }}
          />
          <p className="settings-title-text">{showProfile?"Profile":showBlocked?"Blocked":"Settings"}</p>
        </div>
        <img
          src={SearchIcon}
          alt="SearchIcon"
          style={{ width: "20px", marginRight: "14px" }}
        />
      </div>
      {showProfile === true ? (
        <ProfileSection />
      ) : showBlocked ? (
        <BlockedAccounts />
      ) : (
        <>
          {" "}
          <div className="settings-item-div">
            <div className="settings-profile-card-div">
              <img
                src={ProfileSecIcon}
                alt="profile-icon"
                style={{ width: "70px" }}
              />
              <div className="profile-name-and-number-div">
                <p className="name-text">Salaam</p>
                <p className="number-text">+923231234567</p>
              </div>
              <div className="profile-btn-div">Edit</div>
            </div>
            <div className="web-and-blocked-card-div">
              <div className="web-and-blocked-title-and-arrow-div">
                <p className="web-and-blocked-title-text">
                  Web (Linked Device)
                </p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
              <div
                className="web-and-blocked-title-and-arrow-div"
                onClick={() => setShowBlocked(true)}
                style={{
                  cursor: "pointer",
                }}
              >
                <p className="web-and-blocked-title-text">Blocked</p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
            </div>
            <div
              className="accounts-to-notification-card-div"
              onClick={() => setShowProfile(true)}
              style={{
                cursor: "pointer",
              }}
            >
              <div className="accounts-to-notfication-title-and-arrow-div">
                <p className="accounts-to-notfication-title-text">Account</p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
              <div className="accounts-to-notfication-title-and-arrow-div">
                <p className="accounts-to-notfication-title-text">Privacy</p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
              <div className="accounts-to-notfication-title-and-arrow-div">
                <p className="accounts-to-notfication-title-text">
                  Chat settings
                </p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
              <div className="accounts-to-notfication-title-and-arrow-div">
                <p className="accounts-to-notfication-title-text">
                  Notification settings
                </p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
            </div>
            <div className="help-and-share-card-div">
              <div className="help-and-share-title-and-arrow-div">
                <p className="help-and-share-title-text">Help</p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
              <div className="help-and-share-title-and-arrow-div">
                <p className="help-and-share-title-text">Share app</p>
                <img src={ArrowIcon} alt="ArrowIcon" style={{ width: "7px" }} />
              </div>
            </div>
            <div className="logout-card-div">
              <p className="logout-title-text">Logout</p>
            </div>
          </div>
          <div className="create-folder-button-container">
            <Button
              //   onClick={() => {
              //     props.open(true);
              //   }}
              className="create-folder-button"
            >
              Create Folder +
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Settings;
