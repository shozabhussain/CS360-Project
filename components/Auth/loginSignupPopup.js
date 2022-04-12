import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import AuthPopBox from "./authPopBox";
import { AuthProvider } from "utils/auth";
import ConnectWallet from "components/Wallet/connectWallet";
const LoginSignup = (props) => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showConnectWallet, setShowConnectWallet] = React.useState(false);

  return (
    <AuthProvider>
      {showLogin ? (
        <AuthPopBox
          showLoginProp={(x) => setShowLogin(x)}
          showConnectWalletProp={(x) => setShowConnectWallet(x)}
        />
      ) : null}
      {showConnectWallet ? (
        <ConnectWallet showConnectWalletProp={(x) => setShowConnectWallet(x)} />
      ) : null}

      <button
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        onClick={(e) => {
          e.preventDefault();
          setShowLogin(true);
          //setShowConnectWallet(true);
        }}
      >
        Login/Signup
      </button>
    </AuthProvider>
  );
};

export default LoginSignup;
