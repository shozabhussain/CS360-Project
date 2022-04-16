/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";

import IndexLayout from "layouts/Index.js";
import { myStxAddress } from "utils/auth-wallet";

export default function Index() {
	useEffect(() => {
		const stxAddress = myStxAddress();
		const contractAddress = "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA.MI-token-final-test-version::MI-token";

		fetch(`https://stacks-node-api.testnet.stacks.co/extended/v1/tokens/nft/holdings?principal=${stxAddress}`)
			.then((fetchData) => {
				fetchData.json().then((fetchDataJson) => {
					console.log(fetchDataJson);
					// let myNfts = [];

					// fetchDataJson.nft_events.forEach((value) => {
					// 	if (value.asset_identifier === "ST1A7G32B1P838F3R90HD1SAEJP9GDDM3YSJV57CA.blockedu-v1::blockedu-token") myNfts.push(value.value.repr);
					// });

					// setMyNfts(myNfts);
					// setNumberOfDegrees(myNfts.length);
				});
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	return (
		<>
			<section className="mt-48 pb-40">
				<div className="justify-center text-center flex flex-wrap mt-24 pb-20">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">NFT COLLECTION</h2>
					</div>
				</div>

				<div className="fcontainer">
					<div className="fitem">
						<div className="fitemSmall font-semibold text-1xl">
							<h2 className="font-semibold text-1xl mt-6">NFT Image</h2>
						</div>
						<div className="font-semibold text-0xl">NFT Name</div>
						<div className="font-semibold text-0xl">Other Metadata...</div>
					</div>
					<div className="fitem">
						<div className="fitemSmall font-semibold text-1xl">
							<h2 className="font-semibold text-1xl mt-6">NFT Image</h2>
						</div>
						<div className="font-semibold text-0xl">NFT Name</div>
						<div className="font-semibold text-0xl">Other Metadata...</div>
					</div>
					<div className="fitem">
						<div className="fitemSmall font-semibold text-1xl">
							<h2 className="font-semibold text-1xl mt-6">NFT Image</h2>
						</div>
						<div className="font-semibold text-0xl">NFT Name</div>
						<div className="font-semibold text-0xl">Other Metadata...</div>
					</div>
					<div className="fitem">
						<div className="fitemSmall font-semibold text-1xl">
							<h2 className="font-semibold text-1xl mt-6">NFT Image</h2>
						</div>
						<div className="font-semibold text-0xl">NFT Name</div>
						<div className="font-semibold text-0xl">Other Metadata...</div>
					</div>
				</div>

				{/* <div className="fcontainer">
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
        </div> */}

				{/* <div className="fcontainer">
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
          <div className="fitem">
            <div className="fitemSmall font-semibold text-1xl">
              <h2 className="font-semibold text-1xl mt-6">
                NFT Image
              </h2>
            </div>
            <div className="font-semibold text-0xl">NFT Name</div>
            <div className="font-semibold text-0xl">Other Metadata...</div>        
          </div>
        </div> */}
			</section>
		</>
	);
}

Index.layout = IndexLayout;
