import React, { useState } from "react";
import MessageInput from "../components/MessageInput";
// import TextAreaHeader from "../components/TextAreaHeader";
import "../styles/Chat.scss";
import BackButtonIcon from "../assets/images/Chat/BackButtonIcon.svg";
import AddButtonIcon from "../assets/images/Chat/AddButtonIcon.svg";
import ProfilePicIcon from "../assets/images/Chat/ProfilePicIcon.svg";
import DoubleTickIcon from "../assets/images/Chat/DoubleTickIcon.svg";
import "../styles/addToFolder.scss";
import AddToFolderSection from "./AddToFolder";
import { Select, Space } from "antd";
import Microphone from "../assets/microphone.svg";
import { SearchOutlined } from "@ant-design/icons";
import GroupIcon from "../assets/family_group.svg";
import TickIcon from "../assets/tick.svg";

const { Option } = Select;

const ChatHeader = (props) => {
  return (
    <div className="chatHeader-div">
      <div className="name-and-back-button-div" onClick={props.value}>
        <img
          src={BackButtonIcon}
          alt="backButtonIcon"
          style={{ width: "12px", margin: "2px 2px 2px 20px" }}
        />
        <img
          src={ProfilePicIcon}
          alt="ProfileIcon"
          style={{ width: "46.5px", margin: "2px" }}
        />
        <p className="name-text">Huma Ansari</p>
      </div>

      {!props.showHeader ? (
        <img
          onClick={() => props.openHeader()}
          src={AddButtonIcon}
          alt="AddButtonIcon"
          style={{ marginRight: "30px", width: "20px" }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
          }}
        >
          <img
            src={AddButtonIcon}
            alt="AddButtonIcon"
            style={{ marginRight: "30px", width: "20px" }}
          />
          <div className="addToFolder-container">
            <p className="heading-text">Add To Folder</p>
            <p className="cancel-text" onClick={() => props.closeHeader()}>
              Cancel
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Chat = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const messagesData = {
    "2023-07-18": [
      {
        date: "2023-07-18",
        timestamp: 1679525400000,
        sender: "user",
        receiver: "receiver",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt ac est non vehicula. Nullam a iaculis mauris. Phasellus eu purus laoreet, faucibus erat ac, finibus leo. Nulla faucibus eros sed dolor rhoncus vehicula. Donec convallis augue vel diam blandit, eget fermentum ante sodales.",
        formattedTimestamp: "09:30 AM",
      },
      {
        date: "2023-07-18",
        timestamp: 1679527800000,
        sender: "receiver",
        receiver: "user",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt ac est non vehicula. Nullam a iaculis mauris. Phasellus eu purus laoreet, faucibus erat ac, finibus leo. Nulla faucibus eros sed dolor rhoncus vehicula. Donec convallis augue vel diam blandit, eget fermentum ante sodales.",
        formattedTimestamp: "10:10 PM",
      },
    ],
    "2023-07-19": [
      {
        date: "2023-07-19",
        timestamp: 1679449200000,
        sender: "user",
        receiver: "receiver",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt ac est non vehicula. Nullam a iaculis mauris. Phasellus eu purus laoreet, faucibus erat ac, finibus leo. Nulla faucibus eros sed dolor rhoncus vehicula. Donec convallis augue vel diam blandit, eget fermentum ante sodales.",
        formattedTimestamp: "08:20 PM",
      },
    ],
    "2023-07-20": [
      {
        date: "2023-07-20",
        timestamp: 1679377200000,
        sender: "receiver",
        receiver: "user",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt ac est non vehicula. Nullam a iaculis mauris. Phasellus eu purus laoreet, faucibus erat ac, finibus leo. Nulla faucibus eros sed dolor rhoncus vehicula. Donec convallis augue vel diam blandit, eget fermentum ante sodales.",
        formattedTimestamp: "06:20 PM",
      },
      {
        date: "2023-07-20",
        timestamp: 1679380800000,
        sender: "user",
        receiver: "receiver",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt ac est non vehicula. Nullam a iaculis mauris. Phasellus eu purus laoreet, faucibus erat ac, finibus leo. Nulla faucibus eros sed dolor rhoncus vehicula. Donec convallis augue vel diam blandit, eget fermentum ante sodales.",
        formattedTimestamp: "07:20 AM",
      },
    ],
  };

  //   console.log(Object.keys(messagesData))

  //   function groupMessagesByDate(messages) {
  //     const groupedMessages = {};
  //     messages.forEach((message) => {
  //       const date = message.date;
  //       if (!groupedMessages[date]) {
  //         groupedMessages[date] = [];
  //       }
  //       groupedMessages[date].push(message);
  //     });
  //     return groupedMessages;
  //   }

  //   const groupedMessagesData = groupMessagesByDate(messagesData);
  //   console.log(groupedMessagesData);

  return (
    <div className="chat-container">
      <ChatHeader
        value={props.goBack}
        showHeader={showSideBar}
        openHeader={() => setShowSideBar(true)}
        closeHeader={() => setShowSideBar(false)}
      />
      {!showSideBar ? (
        <>
          <div className="chats">
            {Object.keys(messagesData).map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="date-text-div">
                    <p className="date-text">{item}</p>
                  </div>
                  {messagesData[item].map((mess, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div
                          className={
                            mess.sender === "user"
                              ? "chat-right-text"
                              : "chat-left-text"
                          }
                        >
                          <p className="chat-text">{mess.content}</p>
                          <p className="chat-time-text">
                            {mess.formattedTimestamp}
                            {mess.sender === "user" && (
                              <img
                                src={DoubleTickIcon}
                                alt="doubleTickIcon"
                                style={{ marginLeft: "8px" }}
                              />
                            )}
                          </p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
          <MessageInput />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            className="chats"
            style={{
              height: "87vh",
            }}
          >
            {Object.keys(messagesData).map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="date-text-div">
                    <p className="date-text">{item}</p>
                  </div>
                  {messagesData[item].map((mess, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div
                          className={
                            mess.sender === "user"
                              ? "chat-right-text"
                              : "chat-left-text"
                          }
                          style={{
                            width: "90%",
                          }}
                        >
                          <p className="chat-text">{mess.content}</p>
                          <p className="chat-time-text">
                            {mess.formattedTimestamp}
                            {mess.sender === "user" && (
                              <img
                                src={DoubleTickIcon}
                                alt="doubleTickIcon"
                                style={{ marginLeft: "8px" }}
                              />
                            )}
                          </p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
            <MessageInput />
          </div>
          <div
            className={"addToFolder-section"}
            style={{
              height: "95%",
            }}
          >
            <div className="custom-select-wrapper">
              <div className="prefix-icon">
                <SearchOutlined />
              </div>
              <Select
                mode="multiple"
                showArrow={false}
                // showSearch={true}
                style={{
                  width: "100%",
                }}
                placeholder="Search"
                // defaultValue={["china"]}
                onChange={handleChange}
                optionLabelProp="label"

                // suffixIcon={() => {
                //   return <img src={SearchIcon} />;
                // }}
              >
                <Option value="china" label="China">
                  <Space>
                    <span role="img" aria-label="China">
                      🇨🇳
                    </span>
                    China (中国)
                  </Space>
                </Option>
                <Option value="usa" label="USA">
                  <Space>
                    <span role="img" aria-label="USA">
                      🇺🇸
                    </span>
                    USA (美国)
                  </Space>
                </Option>
              </Select>
              <div className="suffix-icon">
                <img
                  src={Microphone}
                  width={10}
                  style={{
                    marginTop: 3,
                    marginRight: 3,
                  }}
                />
              </div>
            </div>

            <div
              className="input-divs"
              style={{
                width: "75%",
              }}
            >
              <div className="single-input">
                <img src={GroupIcon} width={63} alt="group-cion" />
                <div className="input-group">
                  <p className="group-name-label">Family</p>
                  <img src={TickIcon} width={23} alt="tick" />
                </div>
              </div>
              <div className="single-input">
                <img src={GroupIcon} width={63} alt="group-cion" />
                <div className="input-group">
                  <p
                    className="group-name-label"
                    style={{
                      color: "#FFFFFF",
                    }}
                  >
                    Banks
                  </p>
                </div>
              </div>
              <div className="single-input">
                <img src={GroupIcon} width={63} alt="group-cion" />
                <div className="input-group">
                  <p className="group-name-label">Family</p>
                  <img src={TickIcon} width={23} alt="tick" />
                </div>
              </div>
            </div>
            <div className="add-to-folder-button">Add to Folder</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
