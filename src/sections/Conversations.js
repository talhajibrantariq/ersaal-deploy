import React, { useState } from "react";
import "../styles/conversations.scss";
import TextAreaHeader from "../components/TextAreaHeader";
import userIcon from "../assets/userIcon.svg";
import userPin from "../assets/userPin.svg";
// import MessageInput from "../components/MessageInput";
import Chat from "./Chat";
import CreateFolder from "./CreateFolder";
// import sendMessageIcon from "../assets/sendMessageIcon.svg";

const ConversationSection = (props) => {
  const [chat, setChat] = useState(false);
  const [back, setBack] = useState(false);

  const dataArray = [
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: true,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: true,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: false,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: false,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: false,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: false,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: false,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: false,
    },
    {
      name: "Bank of Azaadi",
      message: "Perf. Tomorrow it is then...Also bring ami if...",
      time: "7:13pm",
      pin: false,
    },
  ];

  function onPressConversation() {
    console.log("Pressed: ");
    setChat(true);
  }

  if (chat) {
    return <Chat goBack={(value) => setChat(false)} />;
  }

  return (
    <div className="conversation-container">
      <TextAreaHeader />
      <div className="conversation-elements">
        {dataArray.map((item, index) => (
          <div
            className="single-conversation"
            key={index}
            onClick={onPressConversation}
          >
            <div style={styles.rowBox}>
              <img src={userIcon} className="user-icon" alt="userIcon" />
              <div style={styles.columnBoxWithMargin}>
                <div style={styles.rowBox}>
                  <p className="user-name-text" alt="username">
                    {item.name}
                  </p>
                  <img
                    src={userPin}
                    alt="userpin"
                    style={{
                      height: 20,
                      width: 15,
                      marginLeft: 10,
                      display: item.pin === true ? "flex" : "none",
                    }}
                  />
                </div>
                <p className="single-message-text">{item.message}</p>
              </div>
            </div>
            <div style={styles.columnBoxWithMargin}>
              <p className="time-text">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <MessageInput /> */}
    </div>
  );
};

export default ConversationSection;

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
  columnBoxWithMargin: {
    display: "flex",
    flexDirection: "column",
    textAlign: "initial",
    marginTop: 10,
  },
};
