/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <>
      <div className="justify-center text-center flex flex-wrap pt-24 custom-txt-title py-24">
        <a>Edit Profile</a>
      </div>

      <div className="flex-auto flex px-6">
        <form className="px-6">
          <div className="flex flex-wrap px-6">
            <div class="px-6">
              <div class="relative px-6">
                <label
                  className="block custom-txt-title text-sm mb-1"
                  for="grid-password"
                >
                  Display Name:
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-transparent text-blueGray-600 bg-black custom-txt-title uppercase rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="demo mint it"
                ></input>
              </div>
            </div>

            <div class="relative px-6">
              <label
                className="block custom-txt-title text-sm mb-1"
                for="grid-password"
              >
                Display Name:
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-transparent text-blueGray-600 bg-black custom-txt-title uppercase rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="demo mint it"
              ></input>
            </div>
          </div>
        </form>
      </div>

      <div className="flex-auto flex py-12">
        <form className="">
          <div className="flex flex-wrap pl-10">
            <div class=" md:w-4/12 pl-10">
              <div class="relative pl-10">
                <label
                  className="block custom-txt-title text-sm mb-1 "
                  for="grid-password"
                >
                  Account Status:
                </label>
                <input
                  type="text"
                  class=" border-0 px-3 py-3 placeholder-transparent text-blueGray-600 bg-black custom-txt-title rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                  value="Manufacturer"
                ></input>
                <div className="text-xs text ">
                  *Note: Changing Account Status back to manufacturer will
                  revoke your verified status (if have)
                </div>
                {/* <label className="block custom-txt-title text-sm mb-1" >
                      *Note: Changing Account Status back to manufacturer will revoke your verified status (if have)
                </label> */}
              </div>
            </div>

            <div className="pl-3 py-6">
              <button class="custom-bg-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded custom-bg-lightblue justify-center">
                Apply for Verification
              </button>
            </div>

            <div class="pl-10 w-32">
              <div class="pl-10 w-32 ">
                <label
                  className="block custom-txt-title text-sm mb-1 "
                  for="grid-password"
                >
                  Connected Wallet:
                </label>
                <div className="box-border border-4 flex flex-auto flex-wrap custom-bg-offwhite rounded-lg">
                  hellok
                </div>
                {/* <input type="text" class="px-3 py-3 placeholder-transparent text-blueGray-600 custom-bg-white custom-txt-title uppercase rounded-lg text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150" value="demo mint it">
                    </input> */}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="justify-center pt-6 mt-24 flex">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded custom-bg-lightblue justify-center">
          Save Changes
        </button>
      </div>
    </>
  );
}

Index.layout = DashboardLayout;
