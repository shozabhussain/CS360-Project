/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <div className="justify-center items-center">
      <div className="justify-center text-center w-full flex flex-wrap mt-16 custom-txt-title pt-24">
        Edit Profile
      </div>

      <div className="flex flex-wrap w-full justify-center items-center mt-16">
        <div class="w-3/12">
          <label
            class="block custom-txt-title tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Display Name:
          </label>


          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="DEMO MINT IT"

          ></input>
        </div>

        <div className="w-1/12"></div>
        <div class="w-3/12">
          <label
            class="block custom-txt-title tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            User Name:
          </label>

          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="demo_mint_it"
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-center items-center mt-12">
        <div class="w-3/12 -ml-4">
          <label
            class="block custom-txt-title tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Account Status:
          </label>

          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Manufacturer"
          ></input>
          <p class="text-red-500 text-xs italic">
            *Note: Changing Account Status back to manufacturer will revoke your
            verified status (if have)
          </p>
        </div>

        <p class="custom-txt-title text-sm ml-2 mr-1 mb-4">Verified</p>

        <i class="fa fa-times-circle fa-lg mr-8 mb-4" ></i>

        <button class="custom-bg-red mx-4 hover:bg-blue-700 mb-4 text-white w-2/12 font-bold py-2 px-12 rounded justify-center">
          <div>Apply for Verification</div>
        </button>
      </div>

      <div className="w-6/12 flex justify-center item-center mt-6">
        <label
          class="block custom-txt-title tracking-wide text-gray-700 text-sm font-bold ml-3"
          for="grid-first-name"
        >
          Connected Wallet:
        </label>
      </div>

      <div className="justify-center items-center flex flex-wrap ">
        <div className="border-0 w-9/12 flex justify-center items-center flex-wrap ">
          <div className="border-2 rounded-lg w-3/12 mx-4 justify-center items-center flex mb-6 ">
            <img src="/img/heylayer-logo.png" class="h-12 mx-4"></img>

            <div className="justify-center items-center w-full my-2 ">
              <p class=" text-sm  custom-txt-normal">Wallet#1</p>
              <p class=" text-lg custom-txt-mainheading ">SP2z......5ZAX</p>

              <div class=" flex">
                <i className="fa fa-undo mr-1 fa-sm mt-1"></i>
                <p class=" text-sm  custom-txt-normal ">Wallet Synced</p>
              </div>
            </div>
          </div>

          <div className="border-2 rounded-lg w-3/12 mx-4 justify-center items-center flex mb-6 ">
            <img src="/img/heylayer-logo.png" class="h-12 mx-4"></img>

            <div className="justify-center items-center w-full my-2 ">
              <p class=" text-sm  custom-txt-normal">Wallet#1</p>
              <p class=" text-lg custom-txt-mainheading ">SP2z......5ZAX</p>

              <div class=" flex">
                <i className="fa fa-undo mr-1 fa-sm mt-1"></i>
                <p class=" text-sm  custom-txt-normal ">Wallet Synced</p>
              </div>
            </div>
          </div>

          <div className="border-2 rounded-lg w-3/12 mx-4 justify-center items-center mb-6">
            <div className="flex mt-1">
              <img src="/img/heylayer-logo.png" class="h-12 mx-4 mt-5"></img>

              <div className="justify-center items-center w-full my-2 ">
                <p class=" text-sm  custom-txt-normal">No Information</p>
                <p class=" text-lg custom-txt-mainheading ">SP2z......5ZAX</p>

                <div class=" flex">
                  <i className="fa fa-undo mr-1 fa-sm mt-1"></i>
                  <p class=" text-sm  custom-txt-normal ">Wallet Not Synced</p>
                </div>
              </div>
            </div>

            <button class="bg-black mx-auto flex flex-wrap hover:bg-blue-700 text-white font-bold custom-txt-title text-sm py-0 px-4 mb-2 rounded-lg justify-center">
              <div>Connect Wallet</div>
            </button>
          </div>

        </div>
      </div>

      <div className="justify-center my-6 flex">
      <button class="bg-blue-500 hover:bg-blue-700 text-white custom-txt-title font-bold py-2 px-4 rounded custom-bg-lightblue justify-center">
        Save Changes
      </button>
      </div>
    </div>
  );
}

Index.layout = DashboardLayout;
