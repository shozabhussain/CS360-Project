/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import IndexLayout from "layouts/Index.js";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

// Landing Page

export default function Index() {
  return (
    <>
      <section className="mt-48">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500 custom-txt-title">
              Mint it (M.I) is a web application that aims to bring transparency
              and fraud resistance to the supply chain of authentic products.
              M.I merges the concept of Blockchain and Supply Chain together which
              possesses the potential to benefit everyone involved in the trading of goods.
            </p>
          </div>
        </div>
      </section>

      {/* <div
      className="w-full h-full bg-no-repeat bg-cover"
      style={{backgroundImage: 'hero-pattern'}}>
      </div> */}

      {/* <div class="bg-[url('/public/img/landing-page-bg.png')]">
      </div> */}

      {/* <div className="h-96 w-80 br-gr">

      </div> */}

      <section className="pb-40">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl custom-txt-mainheading">
              Our Mission Statement:
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500 custom-txt-title">
            “To allow for transparent supply chains and product journeys <br/>
            so that users can make informed decisions about the products they buy”
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

Index.layout = IndexLayout;