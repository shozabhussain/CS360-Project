/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";

import DashboardLayout from "layouts/Dashboard.js";
import Link from "next/link";
import { authenticate } from "utils/auth-wallet";
import { myStxAddress } from "utils/auth-wallet";
import { getUserData } from "utils/auth-wallet";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { getAuth, updateProfile } from "firebase/auth";

import Swal from "sweetalert2";

import {
  doc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

import { db } from "utils/firebaseClient";

// Landing Page

const walletButton = () => {
  try {
    getUserData();
    return (
      <div>
        <div className="flex mt-1">
          <img src="/img/heylayer-logo.png" className="h-12 mx-4 mt-5"></img>

          <div className="justify-center items-center w-full my-2 ">
            <p className=" text-sm  custom-txt-normal">Wallet#1</p>
            <p className=" text-lg custom-txt-mainheading ">{myStxAddress()}</p>

            <div className=" flex">
              <i className="fa fa-undo mr-1 fa-sm mt-1"></i>
              <p className=" text-sm  custom-txt-normal ">Wallet Synced</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    return (
      <div>
        <div className="flex mt-1">
          <img src="/img/heylayer-logo.png" className="h-12 mx-4 mt-5"></img>

          <div className="justify-center items-center w-full my-2 ">
            <p className=" text-sm  custom-txt-normal">No Information</p>
            <p className=" text-lg custom-txt-mainheading ">SP2z......5ZAX</p>

            <div className=" flex">
              <i className="fa fa-undo mr-1 fa-sm mt-1"></i>
              <p className=" text-sm  custom-txt-normal ">Wallet Not Synced</p>
            </div>
          </div>
        </div>

        <button
          onClick={authenticate}
          className="bg-black mx-auto flex flex-wrap hover:bg-blue-700 text-white font-bold custom-txt-title text-sm py-0 px-4 mb-2 rounded-lg justify-center"
        >
          Connect Wallet
        </button>
      </div>
    );
  }
};

const auth = getAuth();

export default function Index() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      let data = {};
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          data = docSnap.data();
          setUserEmail(data.email);
          setUserName(data.userName);
          setUid(user.uid);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    });
  }, []);

  const editProfile = (index) => {
    const docRef = doc(db, "users", uid);

    updateDoc(docRef, {
      userName: userName,
    }).then(() => {
      Swal.fire("Details edited");
    });
  };

  return (
    <div className="justify-center items-center">
      <div className="justify-center text-center w-full flex flex-wrap mt-16 custom-txt-title pt-24 text-white">
        Edit Profile
      </div>

      <div className="flex flex-wrap w-full justify-center items-center mt-16">
        <div className="w-3/12">
          <label
            className="block custom-txt-title tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            User Name:
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="demo_mint_it"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="w-1/12"></div>

        <div className="w-3/12">
          <label
            className="block custom-txt-title tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            User Email:
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="demo_mint_it"
            value={userEmail}
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-center items-center mt-12">
        <div className="w-3/12 -ml-4">
          <label
            className="block custom-txt-title tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Account Status:
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Manufacturer"
          ></input>
          <p className="text-red-500 text-xs italic">
            *Note: Changing Account Status back to manufacturer will revoke your
            verified status (if have)
          </p>
        </div>

        <p className="custom-txt-title text-sm ml-2 mr-1 mb-4 text-red-500">
          Verified
        </p>

        <i className="fa fa-times-circle fa-lg mr-8 mb-4"></i>

        <Link href="/dashboard/apply-verify">
          <button className="custom-bg-red mx-4 hover:bg-blue-700 mb-4 text-white w-2/12 font-bold py-2 px-12 rounded justify-center">
            <div>Apply for Verification</div>
          </button>
        </Link>
      </div>

      <div className="w-6/12 flex justify-center item-center mt-6">
        <label
          className="block custom-txt-title tracking-wide text-white text-sm font-bold ml-3"
          for="grid-first-name"
        >
          Connected Wallet:
        </label>
      </div>

      <div className="justify-center items-center flex flex-wrap ">
        <div className="border-0 w-9/12 flex justify-center items-center flex-wrap ">
          <div className="border-2 rounded-lg mx-4 justify-center items-center mb-6 pr-4 bg-gray-200">
            {walletButton()}
          </div>
        </div>
      </div>

      <div className="justify-center my-6 flex">
        <button
          onClick={editProfile}
          className="bg-blue-500 hover:bg-blue-700 text-white custom-txt-title font-bold py-2 px-4 rounded custom-bg-lightblue justify-center"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

Index.layout = DashboardLayout;
