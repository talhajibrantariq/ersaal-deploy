import React from 'react'
import SideBar from '../sections/SideBar'
import Chat from '../sections/Chat';
import CreateFolder from '../sections/CreateFolder';
import Settings from '../sections/Settings';

const ChatScreen=()=>{
    return(
        
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10,
                // flex:1
              }}
            >
              <Settings />
              <CreateFolder />
            </div>
          
    )
}
export default ChatScreen;