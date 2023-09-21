import React, { useState, ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-4 h-screen overflow-hidden sm:p-4">
      <div className="w-52 border-2 border-gray-300 rounded-xl md:block hidden">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto hideMiddleSectionScrollbar">
        <Header />
        <div>{children}</div>
      </div>
      <div className="w-64 md:block hidden">
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
