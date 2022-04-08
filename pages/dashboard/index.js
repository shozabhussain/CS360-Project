/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect} from "react";

import DashboardLayout from "layouts/Dashboard.js";
import { AuthProvider } from "utils/auth";
import { userAuth } from "utils/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { userAcessToken } from "utils/fetchUserDetails";
import firebaseClient from 'utils/firebaseClient';
import ConnectWallet from "components/Wallet/connectWallet";
// Landing Page

export default function Index() {

 
    useEffect(() => {
      const accessToken = userAcessToken();
      if (!accessToken){
        console.log("isko ghar lekar jaao")
        window.location.href="/"

      }

      
    }, []);
  const {user} = userAuth();
  firebaseClient();
  return (
    <>
      
      <section className="mt-48 pb-40">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={
                async () =>{

                  await firebase.auth().signOut().then(() => {
                    // Sign-out successful.
                    localStorage.clear();

                    window.location.href = "/"
                  }).catch((error) => {
                    console.log("Signout Error: ", error)
                    // An error happened.
                  });
                    
                   

                }
            }>
        Sign Out
      </button>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">
              View Collection
            </h2>
          </div>
        </div>
        <ConnectWallet />
      </section>

    </>
  );
}

Index.layout = DashboardLayout;