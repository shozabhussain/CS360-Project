/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <div>
      <div className="flex flex-auto mt-48 custom-txt-mainheading justify-center">
        TRANSACTIONS
      </div>

      <div className="mx-4 px-12 mt-8 justify-center items-center ">
        <div className="w-full box-border custom-bg-offwhite rounded-lg  justify-center items-center py-2 pl-10">
          <div className="flex flex-wrap w-10/12 ml-3">
            <button class="bg-black mx-auto hover:bg-blue-700 text-white font-bold py-2 px-12 rounded custom-bg-lightblue justify-center">
              Failed
            </button>

            <button class="bg-white mx-auto flex flex-wrap hover:bg-blue-700 text-black font-bold py-2 px-12 rounded custom-bg-lightblue justify-center">
              <div className="mr-3">
                <i className="fa-solid fa-check fa-lg"></i>
              </div>
              <div>Confirmed</div>
            </button>

            <button class="bg-white mx-auto flex hover:bg-blue-700 text-black font-bold py-2 px-12 rounded custom-bg-lightblue justify-center">
              <div className="mr-3">
                <i class="fa-solid fa-exclamation-circle fa-lg"></i>
              </div>
              <div>Pending</div>
            </button>
          </div>

          <div>hel</div>
        </div>
      </div>
    </div>
  );
}

Index.layout = DashboardLayout;
