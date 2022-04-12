import React from "react";
import Link from "next/link";

import LoginSignup from "../Auth/loginSignupPopup";

export default function Navbar(props) {
  return (
    <nav className="flex bg-blueGray-100 h-16 fixed top-0 z-30 w-full my-4 mx-4 items-center justify-center">
      <div className="w-1/12">
        <div>Mint It</div>
      </div>
      <ul className="flex w-10/12 items-center justify-center">
        <li className="mx-4">About</li>
        <li className="mx-4">Track</li>
        <li className="mx-4">Verified Manufacturers</li>
        <li className="mx-4">Contact</li>
        <li className="mx-4">Journey</li>
      </ul>
      <div className="flex w-1/12">
        <LoginSignup />
      </div>
    </nav>
  );
}
