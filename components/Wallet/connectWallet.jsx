import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import Image from 'next/image'
import { AuthProvider } from "utils/auth";
import { userAuth } from "utils/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseClient from 'utils/firebaseClient'



const ConnectWallet = (props) => {

  
  // dropdown props

  const {user} = userAuth();
  firebaseClient();
  return (

    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
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
          <div className="relative p-6 flex justify-center items-center">

          <div className="justify-center items-end">
              <img src="/img/pattern_nextjs.png" width="50%" />
          </div>    
          <div>
              <p>No Information</p>
              <span className="text-lg font-bold">Hiro Wallet</span>
              <p>Wallet Not Synced.</p>
          </div>
          
          </div>

         
              
         
                
              
            
          {/*footer*/}
          <div className="p-6 flex-auto -mt-10">
        
         
                   
             
                     
              
                  </div>
        </div>
      </div>
    </div>
    
  );
};


export default ConnectWallet;
