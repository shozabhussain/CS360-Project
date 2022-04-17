/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";

import DashboardLayout from "layouts/Dashboard.js";
import { myStxAddress } from "utils/auth-wallet";
import { cvToJSON, cvToString, cvToValue } from "@stacks/transactions";

export default function Index() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const stxAddress = myStxAddress();
    const contractIdentifier =
      "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA.MI-token-final-test-version::MI-token";

    fetch(
      `https://stacks-node-api.testnet.stacks.co/extended/v1/tokens/nft/holdings?principal=${stxAddress}`
    )
      .then((fetchData) => {
        fetchData.json().then((fetchDataJson) => {
          // console.log(fetchDataJson);
          const allNfts = fetchDataJson.results;

          const myNfts = allNfts.filter((nft) => {
            if (nft.asset_identifier === contractIdentifier) return nft;
          });

          setNfts(myNfts);
          console.log(myNfts);
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <section className="mt-48 pb-40">
        <div>
          <div className="flex flex-auto mt-48 custom-txt-mainheading justify-center text-white">
            NFT COLLECTION
          </div>

          <div className="flex flex-wrap w-full pl-10">
            {nfts.map((nft, i) => {
              return (
                <div
                  key={i}
                  className="box-border flex flex-col border-0 w-3/12 mt-12 custom-txt-title custom-bg-offwhite rounded px-4 pt-2 mr-8"
                >
                  <div className="box-border border-0 custom-bg-lightblue rounded-lg p-8 mb-2">
                    <div className="custom-txt-title">nft image</div>
                  </div>
                  <div className="custom-txt-normal text-wrap">
                    Hex Value: {nft.value.hex}
                  </div>
                  <div className="custom-txt-normal text-wrap">
                    Transaction ID: {nft.tx_id}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

Index.layout = DashboardLayout;
