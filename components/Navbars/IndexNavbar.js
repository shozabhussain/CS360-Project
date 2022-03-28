import React from "react";

export default function Navbar() {
  return (
    <nav className="flex h-16 fixed top-0 z-50 w-full my-4 mx-4 items-center justify-center">
      <div className="w-1/12 custom-txt-title">
        <div className="custom-txt-title">
          Mint It
          </div>
      </div>
      <ul className="flex w-10/12 items-center justify-center custom-txt-normal">
        <li className="mx-4" >
          <a href="#pablo">
          About
          </a>
        </li>
        <li className="mx-4" >
          <a href="#pablo">
          Track
          </a>
        </li>
        <li className="mx-4" >
          <a href="#pablo">
          Verified Manufacturers
          </a>
        </li>
        <li className="mx-4" >
          <a href="#pablo">
          Contact
          </a>
        </li>
        <li className="mx-4" >
          <a href="#pablo">
          Journey
          </a>
        </li>
      </ul>
      <div className="flex w-1/12">
        <div>
          <a href="#pablo">
          Login
          </a>
        </div>
      </div>
    </nav>
  );
}
