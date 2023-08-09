import React,{useState} from "react";
import SideBar from "../sections/SideBar";
import ConversationSection from "../sections/Conversations";
import CreateFolder from "../sections/CreateFolder";

const HomeScreen = () => {


  const [openFolder,setOpenFolder]=useState(false);
  
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
      }}
    >
      <SideBar open={(value) => setOpenFolder(value)} />
     {openFolder ? (
        <CreateFolder back={(value) => setOpenFolder(value)} />
      ) : (
        <ConversationSection openFolder={() => setOpenFolder(true)} />
      )}
    </div>
  );
};

export default HomeScreen;
