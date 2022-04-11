/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexLayout from "layouts/Index.js";

export default function Index() {
  return (
    <>
    
      <section className="mt-48 pb-40">

        <div className="fcontainerNew">
            <div className="fitemLeft">
                <h2 className="font-bold text-3xl mt-48 text-center">
                    Product Image
                </h2>
            </div>

            <div className="fitemRight">
                <div className="fitemRightInner">
                    <h2 className="font-bold text-1xl mt-4 indent-2">
                        Product Name
                    </h2>

                    <h2 className="font-bold text-1xl mt-2 indent-2">
                        Product Size
                    </h2>

                    <h2 className="font-bold text-1xl mt-2 indent-2">
                        Product Color
                    </h2>

                    <h2 className="font-bold text-1xl mt-2 indent-2">
                        Other Metadata...
                    </h2>
                </div>

                <div className="fitemRightInner">
                    <h2 className="font-bold text-1xl mt-4 indent-2">
                        Product Attributes
                    </h2>

                    <div className="fitemButton font-bold text-1xl mt-100">
                        Transfer NFT
                    </div>
                </div>

            </div>
            
        </div>

        <div className="fcontainerChain justify-center text-center flex flex-wrap">
            <div className="w-full md:w-6/12 px-12 md:px-4">
                <h2 className="font-bold text-4xl text-white">
                    Product Timeline
                </h2>
                
                <div className="fText mt-10">
                    <img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />

                    <div>
                        <h2 className="font-bold text-2xl text-white mt-6">
                            Manufacturer Address
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            Day Month Year
                        </h2>
                    </div>
                </div>

                <div className="fTextLeft text-right">
                    <div>
                        <h2 className="font-bold text-2xl text-white mt-6">
                            Next Owner Address
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            Day Month Year
                        </h2>
                    </div>

                    <img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />
                </div>

                <div className="fText">
                    <img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />

                    <div>
                        <h2 className="font-bold text-2xl text-white mt-6">
                            Next Owner Address
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            Day Month Year
                        </h2>
                    </div>
                </div>

                <div className="fTextLeft text-right">
                    <div>
                        <h2 className="font-bold text-2xl text-white mt-6">
                            Next Owner Address
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
                        </h2>

                        <h2 className="font-bold text-1xl text-white">
                            Day Month Year
                        </h2>
                    </div>

                    <img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />
                </div>

            </div>
        </div>
          
      </section>

    </>
  );
}

Index.layout = IndexLayout;