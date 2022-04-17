/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";
import IndexLayout from "layouts/Index.js";

// Landing Page

export default function Index() {
  return (
    <div>
      <div className="flex flex-auto custom-txt-mainheading justify-center text-white">
        <p className="mt-40">List of all Verified Manufacturers</p>
      </div>

      <section className="pb-40">
        <div className="justify-center flex flex-wrap">
          <div className="w-full md:w-8/12 px-12 md:px-2">
            <div className="box-border border-4 flex flex-auto mt-12 custom-txt-title custom-bg-offwhite rounded-lg p-5">
              <div className="w-3/12 pr-12">Some manufacturer</div>

              <div className="w-8/12 pl-10 pr-12">
                <div>Wallet Address</div>

                <div className="custom-txt-normal">
                  SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
                </div>
              </div>

              <div>
                <i className="fas fa-chevron-circle-down w-1/12 pl-10 pt-6 fa-lg "></i>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Index.layout = IndexLayout;
