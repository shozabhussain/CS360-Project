import React, { useState } from "react";

import IndexLayout from "layouts/Index.js";
import { QrReader } from "react-qr-reader";

export default function Index() {
  const [qrResult, setQrResult] = useState(-1);

  return (
    <>
      <section className="pb-40">
        <div className="justify-center text-center flex flex-wrap">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl mt-48 text-white">
              Track Ownership of a Product
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
              Scan the QR code on the backside of the product
            </p>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setQrResult(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              className="w-full"
              constraints={{
                facingMode: "environment",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

Index.layout = IndexLayout;
