import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function LayoutAdmin() {
  return (
    <div className="min-h-screen grid grid-cols-6 ">
      <Sidebar />
      <div className="xl:col-span-5 bg-red-400 ">
        <Header />
        <div className="h-[90vh] overflow-y-scroll scroll-hidden">
         
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
