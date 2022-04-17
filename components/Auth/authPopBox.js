import React, { useState } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import Image from "next/image";
import { AuthProvider } from "utils/auth";
import { userAuth } from "utils/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { firebaseClient } from "utils/firebaseClient";
import { loginAuth, signupAuth, signInGoogle } from "utils/authentication";
import { useRouter } from "next/router";
import ConnectWallet from "components/Wallet/connectWallet";
import { passwordReset } from "utils/authentication";
import {getUserData} from "utils/auth-wallet"



const AuthPopBox = (props) => {
  const router = useRouter();
  // dropdown props
  const [openTab, setOpenTab] = useState(1);
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPasswordFirst, setSignupPasswordFirst] = useState("");
  const [signupPasswordSec, setSignupPasswordSec] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [loginerror, setLoginError] = useState("");
  const [loginerrorShow, setLoginErrorShow] = useState(false);

  const [signUperror, setsignUpError] = useState("");
  const [signUperrorShow, setsignUpErrorShow] = useState(false);
  const [show_connect_wallet, setShowConnectWallet] = useState(false);
  const { user } = userAuth();
  firebaseClient();

  const fetchWalletID = () => {
    // Return Wallet ID if any
  };

  const registerWithGoogle = () => {
    signInGoogle().then((user) => {
      if (0) {
        // check wallet already connected
        router.push("/dashboard");
      } else {
        // Ask to connect wallet again
        props.showConnectWalletProp(true);
        props.showLoginProp(false);
      }
    });
  };

  const passwordResetEmail = (email) => {
    passwordReset(email).then(() => {
      console.log("Email sent");
    });
  };

  const registerWithEmail = (signinEmail, signinPassword) => {
    loginAuth(signinEmail, signinPassword)
      .then((user) => {
        if (0) {
          // check wallet already connected
          router.push("/dashboard");
        } else {
          // Ask to connect wallet again
          props.showConnectWalletProp(true);
          props.showLoginProp(false);
        }
      })
      .catch((error) => {
        setLoginError(error.message);
        setLoginErrorShow(true);
      });
  };
  const signUpWithEmail = (signupEmail, signupPasswordFirst) => {
    signupAuth(signupEmail, signupPasswordFirst)
      .then((user) => {
        if (0) {
          // check wallet already connected
          router.push("/dashboard");
        } else {
          // Ask to connect wallet again
          props.showConnectWalletProp(true);
          props.showLoginProp(false);
        }
      })
      .catch((error) => {
        setsignUpError(error.message);
        setsignUpErrorShow(true);
      });
  };

  return (
    <>
      {/* {user != null ? console.log("UserID: ", user.uid):console.log("No user logged in")} */}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full custom-bg-offwhite outline-none focus:outline-none">
            {/*header*/}
            <div className="w-full border-b border-solid border-blueGray-200 rounded-t">
              <div>
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px last:mr-0 flex-auto text-right">
                    <a
                      className={
                        "text-xs pl-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "custom-bg-yellow "
                          : "text-blueGray-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      <span className="mr-3">Sign In</span>
                    </a>
                  </li>
                  <li className="-mb-px last:mr-0 flex-auto text-left">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "custom-bg-yellow"
                          : "text-blueGray-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      <span className="ml-3">Sign Up</span>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 text-center">
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => props.showLoginProp(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {/* Login Form */}
                <p className="custom-txt-title text-black">
                  Enter your email and password below:
                </p>
                <p className="custom-txt-normal text-black">
                  To continue logging into the account
                </p>
                {loginerrorShow ? (
                  <div className=" bg-red-600 text-white p-2 mt-2 mb-2 rounded-lg flex w-full justify-center items-center">
                    <i className="fa fa-exclamation-circle mr-2"></i>{" "}
                    {loginerror}
                  </div>
                ) : null}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    registerWithEmail(signinEmail, signinPassword);
                  }}
                >
                  <div className="relative w-full mb-3 mt-5">
                    <input
                      required
                      type="email"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all custom-bg-white"
                      placeholder="Email"
                      onChange={(e) => setSigninEmail(e.target.value)}
                      value={signinEmail}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <input
                      required
                      type="password"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 custom-bg-white"
                      placeholder="Password"
                      onChange={(e) => setSigninPassword(e.target.value)}
                      value={signinPassword}
                    />
                  </div>

                  <p className="custom-txt-sml text-black">
                    By Signing in you agree to our{" "}
                    <a href="#" className="custom-a-blue">
                      Terms & Conditions.
                    </a>{" "}
                  </p>
                  <div className="text-center mt-6">
                    <input
                      className="custom-bg-lightblue cursor-pointer custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Login"
                    />
                  </div>
                  <a
                    className="text-center text-gray-400 custom-txt-sml"
                    href=""
                    onClick={() => passwordResetEmail(signinEmail)}
                  >
                    Reset Password?
                  </a>
                </form>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                {/* Sign Up Form */}
                <p className="custom-txt-title text-black">
                  Enter your email and password below:
                </p>
                <p className="custom-txt-normal text-black">
                  OWN . Transfer . Verify
                </p>
                {/* {signUperrorShow ? <div className="bg-red-400 text-white p-2">Error! {signUperror}</div> : null} */}
                {signUperrorShow ? (
                  <div className=" bg-red-600 text-white p-2 mt-2 mb-2 rounded-lg flex w-full justify-center items-center">
                    <i className="fa fa-exclamation-circle mr-2"></i>{" "}
                    {signUperror}
                  </div>
                ) : null}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (signupPasswordFirst === signupPasswordSec) {
                      signUpWithEmail(signupEmail, signupPasswordFirst);
                    }
                  }}
                >
                  <div className="relative w-full mb-3 mt-5">
                    {/* <input
                    type="text"
                    className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all custom-bg-white"
                    placeholder="Username - Must be Unique"
                    onChange={(e)=>setSignupUsername(e.target.value)}
                  /> */}
                  </div>
                  <div className="relative w-full mb-3 mt-5">
                    <input
                      required
                      type="email"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all custom-bg-white"
                      placeholder="Email"
                      onChange={(e) => {
                        setSignupEmail(e.target.value);
                        setsignUpErrorShow(false);
                      }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <input
                      required
                      type="password"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 custom-bg-white"
                      placeholder="Password"
                      onChange={(e) => {
                        setSignupPasswordFirst(e.target.value);
                        setsignUpErrorShow(false);
                      }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      required
                      type="password"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 custom-bg-white"
                      placeholder="Re-enter Password"
                      onChange={(e) => {
                        setSignupPasswordSec(e.target.value);
                        setsignUpErrorShow(false);
                      }}
                    />
                    {signupPasswordFirst != signupPasswordSec ||
                    signupPasswordFirst == "" ? (
                      <p className="custom-txt-sml text-red-600">
                        Password{" "}
                        <span className="font-bold underline">NOT</span> Match!
                      </p>
                    ) : (
                      <p className="custom-txt-sml text-red-600">
                        Password{" "}
                        <span className="font-bold underline">Matched!</span>
                      </p>
                    )}
                  </div>

                  <p className="custom-txt-sml text-black">
                    By Signing up you agree to our{" "}
                    <a href="#" className="custom-a-blue">
                      Terms & Conditions.
                    </a>
                  </p>
                  <div className="text-center mt-6">
                    <input
                      className="custom-bg-lightblue cursor-pointer custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Create Account"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/*footer*/}
            {openTab == 1 ? (
              <div className="p-6 flex-auto -mt-10">
                <div className="custom-txt-sml text-center text-black">
                  Not registered account yet?{" "}
                  <a
                    href=""
                    onClick={() => setOpenTab(2)}
                    className="custom-a-blue cursor-pointer"
                  >
                    Sign Up NOW!.
                  </a>
                </div>

                <button
                  onClick={registerWithGoogle}
                  className="mt-1 custom-bg-lightblue custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                >
                  <span>REGISTER or LOGIN USING GOOGLE</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      {show_connect_wallet ? <ConnectWallet /> : null}
    </>
  );
};

export default AuthPopBox;
