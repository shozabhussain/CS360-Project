import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import AuthPopBox from "./authPopBox";
const LoginSignup = (props) => {
  const [showLogin, setShowLogin] = React.useState(false);
  return (
    <>
    {showLogin ? <AuthPopBox showLoginProp = {(x) => setShowLogin(x)}/> : null}
      <button
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        onClick={(e) => {
          e.preventDefault();        
          setShowLogin(true);
        }}
      >
          Login/Signup
      </button>
     
    </>
  );
};

export default LoginSignup;
