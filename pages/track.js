/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexLayout from "layouts/Index.js";

export default function Index() {
  return (
    <>
      {/* Can also use my-32 instead of mt-48 and pb-40 */}
      <section className="mt-48 pb-40">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">
              Track Ownership of a Product
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Scan the QR code on the backside of the product
            </p>
            <div className="bg-purple-200 h-72 font-semibold text-2xl flex justify-center content-center">
              <p>
                Scan Area
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

Index.layout = IndexLayout;
