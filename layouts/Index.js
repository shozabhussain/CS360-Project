import React from "react";

// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Auth({ children }) {
  return (
    <>
      <IndexNavbar />
      {children}
      <Footer />
    </>
  );
}
