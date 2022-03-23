import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex fixed w-full my-4 mx-4 items-center justify-center">
        <div className="w-1/12">
          <div>Mint It</div>
        </div>
        <ul className="flex w-10/12 items-center justify-center">
          <li className="mx-4" >
            About
          </li>
          <li className="mx-4" >
            Track
          </li>
          <li className="mx-4" >
            Verified Manufacturers
          </li>
          <li className="mx-4" >
            Contact
          </li>
          <li className="mx-4" >
            Journey
          </li>
        </ul>
        <div className="flex w-1/12">
          <div>Login</div>
        </div>
      </nav>
    </>
  );
}
