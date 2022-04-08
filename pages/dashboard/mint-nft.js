/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <>
      {/* <link rel="stylesheet" href="style.css"></link> */}
      <section className="mt-48 pb-40">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl pb-16">
              MINT NFT PRODUCT
            </h2>
          </div>
            <div class="fcontainer">
            <div class="fitemLarge item1">1</div>
            <div>
              <div class="fitemMedium item3">2</div>
              <div class="fitemSmall item3">2a</div>
              <div class="fitemSmall item3">2b</div>
              <div class="fitemSmall item3">2c</div>
            </div>          
          </div>
        </div>
      </section>
      <section>
        {/* <div class="fcontainer">
          <div class="fitemLarge item1">1</div>
          <div>
            <div class="fitemMedium item3">2</div>
            <div class="fitemSmall item3">2a</div>
            <div class="fitemSmall item3">2b</div>
            <div class="fitemSmall item3">2c</div>
          </div>          
        </div> */}
      </section>

    </>
  );
}

Index.layout = DashboardLayout;