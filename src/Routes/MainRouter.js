import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../screens/Login";
import ConversationSection from "../sections/Conversations";
import SideBar from "../sections/SideBar";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileSection from "../sections/Profile";
import BlockedAccounts from "../sections/BlockedAccounts";

const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<HomeScreen />} />
      <Route exact path="/sideBar" element={<SideBar />} />
      <Route exact path="/conversations" element={<ConversationSection />} />
      <Route exact path="/chat" element={<ChatScreen />} />
      <Route exact path="/profile" element={<ProfileSection />} />
      <Route exact path="/blockedAccounts" element={<BlockedAccounts />} />
    </Routes>
  );
};

export default MainRouter;
