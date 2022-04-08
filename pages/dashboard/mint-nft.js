/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <>
      {/* <link rel="stylesheet" href="style.css"></link> */}
      <section className="mt-48 pb-10">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl pb-16 mt-12">
              MINT NFT PRODUCT
            </h2>
          </div>
          <div class="fcontainer  pb-6">
            <div class="fitemLarge item1 font-semibold text-1xl">Image Preview</div>
            <div>
              <div class="fitemMedium item3 font-semibold text-1xl">Click to Upload an Image</div>
              <h2 className="font-semibold text-2xl">
                Product Name:
              </h2>
              <div class="fitemSmall item3 font-semibold text-1xl">Enter product name</div>
              <h2 className="font-semibold text-2xl">
                Category:
              </h2>
              <div class="fitemSmall item3 font-semibold text-1xl">Select Category</div>
              <h2 className="font-semibold text-2xl">
                Manufacturing Date:
              </h2>
              <div class="fitemSmall item3 font-semibold text-1xl">__/__/__</div>
            </div>          
          </div>

          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl mt-12">
              ATTRIBUTES
            </h2>
          </div>

          {/* <div className="fcontainerSecond mt-10">
            <div className="fcontainerTitle">
              <h2 className="fitemSmall">
                Size:
              </h2>
              <h2 className="fitemSmall">
                Colour:
              </h2>
              <h2 className="fitemSmall">
                Design Type:
              </h2>
            </div>
          </div> */}

          <div class="fcontainerSecond mt-10">
            <div>
              <h2 className="fitemTitle font-semibold text-2xl">
                Size:
              </h2>
              <div class="fitemSmall item1 mt-5 font-semibold text-1xl"> Enter Size</div>
            </div>

            <div>
              <h2 className="fitemTitle font-semibold text-2xl">
                Color:
              </h2>
              <div class="fitemSmall item1 mt-5 font-semibold text-1xl">Enter Color</div>
            </div>

            <div>
              <h2 className="fitemTitle font-semibold text-2xl">
                Design Type:
              </h2>
              <div class="fitemSmall item1 mt-5 font-semibold text-1xl">Select Design</div>
            </div>

          </div>

          <div class="fcontainerSecond">
            <div> 
              <h2 className="fitemTitle font-semibold text-2xl">
                  Country of Manufacture:
              </h2>
              <div class="fitemSmall item1 mt-5 font-semibold text-1xl">Select Country</div>
            </div>

            <div>
              <h2 className="fitemTitle font-semibold text-2xl">
              Gender:
              </h2>
              <div class="fitemSmall item1 mt-5 font-semibold text-1xl"> Select Gender</div>
            </div> 
        
          </div>

          <div>
          </div>


        </div>

      </section>
      <div class="fconButton justify-center text-center">
        <div className="fitemMediumNext justify-center text-center font-semibold text-2xl mt-16">
          MINT IT!!!
        </div>
      </div>  
    </>
  );
}

Index.layout = DashboardLayout;