import React from "react";

// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import AuthPopBox from "components/Auth/authPopBox";




export default function Auth({ children }) {
 
  return (
    <>
      
      <IndexNavbar />
  
      {children}
 
      <Footer />

      {/* <div  
        
        className={
          (showLogin ? "block " : "hidden ") 
        }>
      <AuthPopBox/>
      </div> */}
    </>
  );
}
