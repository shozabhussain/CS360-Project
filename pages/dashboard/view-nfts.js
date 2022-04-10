/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <div>
      <div className="flex flex-auto mt-48 custom-txt-mainheading justify-center">
        NFT COLLECTION
      </div>

      <div className="flex flex-wrap w-full pl-10">
        <div className="box-border border-0 w-3/12 mt-12 custom-txt-title custom-bg-offwhite rounded px-4 pt-2 mr-8">
            <div className="box-border border-0 custom-bg-lightblue rounded-lg p-8 mb-2">
                <div className="custom-txt-title">
                nft image
                </div>
            </div>
            <div className="custom-txt-normal text-wrap">
                NFT name
            </div>
        </div>

        <div className="box-border border-0 w-3/12 mt-12 custom-txt-title custom-bg-offwhite rounded px-4 pt-2 mr-8">
            <div className="box-border border-0 custom-bg-lightblue rounded-lg p-8 mb-2">
                <div className="custom-txt-title">
                nft image
                </div>
            </div>
            <div className="custom-txt-normal text-wrap">
                NFT name
            </div>
        </div>

        <div className="box-border border-0 w-3/12 mt-12 custom-txt-title custom-bg-offwhite rounded px-4 pt-2 mr-8">
            <div className="box-border border-0 custom-bg-lightblue rounded-lg p-8 mb-2">
                <div className="custom-txt-title">
                nft image
                </div>
            </div>
            <div className="custom-txt-normal text-wrap w-full">
                NFT name
            </div>
        </div>

        <div className="box-border border-0 w-3/12 mt-12 custom-txt-title custom-bg-offwhite rounded px-4 pt-2 mr-8">
            <div className="box-border border-0 custom-bg-lightblue rounded-lg p-8 mb-2">
                <div className="custom-txt-title">
                nft image
                </div>
            </div>
            <div className="custom-txt-normal text-wrap">
                NFT name
            </div>
        </div>
      </div>

      {/* <section className="pb-40">
        <div className="justify-center flex flex-wrap">
          <div className="w-full md:w-8/12 px-12 md:px-2">
            <div className="box-border border-4 flex flex-auto mt-12 custom-txt-title custom-bg-offwhite rounded-lg p-5">


              <div></div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

Index.layout = DashboardLayout;
