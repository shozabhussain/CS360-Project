import React from "react";

// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import AuthPopBox from "components/Auth/authPopBox";

export default function Auth({ children }) {
  return (
    <>
      <div className="min-h-screen w-screen bg-black bg-[url('/img/dashboardbg.png')]">
        <IndexNavbar />
        {children}
      </div>
    </>
  );
}
