import React from "react";
import "../styles/TextAreaHeader.scss";
import menu_others from "../assets/menu_others.svg";
import addPeople from "../assets/addPeople.svg";
import pin from "../assets/pin.svg";

const TextAreaHeader = ({props}) => {
  return (
    <div className="header-section">
      <div className="group-name-div">
        <img src={menu_others} className="icon-header" alt="group-icon" />
        <div style={styles.columnBoxBox}>
          <div style={styles.rowBox}>
            <p className="folder-name">Others</p>
            <img
              src={pin}
              alt="pin-icon"
              width={"16px"}
              style={{
                marginLeft: 10,
              }}
            />
          </div>

          <p className="folder-description">Unsorted SMS</p>
        </div>
      </div>
      <div className="add-people-div">
        <img
          src={addPeople}
          alt="add-people-icon"
          width={"30px"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default TextAreaHeader;

const styles = {
  rowBox: {
    display: "flex",
    flexDirection: "row",
    textAlign: "initial",
  },
  columnBox: {
    display: "flex",
    flexDirection: "column",
    textAlign: "initial",
  },
};
