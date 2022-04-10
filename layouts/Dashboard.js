import React from "react";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      {/* <div className="bg-black top-0 right-0 fixed w-full h-full z-50"></div> */}
      <Sidebar />
      <div className="relative md:ml-64 bg-black bg-[url('/img/dashboardbg.png')] bg-auto">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4  mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
