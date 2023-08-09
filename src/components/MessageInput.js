import React from 'react'
import sendMessageIcon from "../assets/sendMessageIcon.svg";

const MessageInput=()=>{
    return(
        <div className="message-input">
        <input className="send-message" placeholder="Message" />
        <img
          src={sendMessageIcon}
          alt="sendMessage"
          style={{
            height: 50,
            width: 50,
          }}
        />
      </div>
    )
}

export default MessageInput;