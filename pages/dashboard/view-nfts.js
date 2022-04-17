/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";

import DashboardLayout from "layouts/Dashboard.js";
import { myStxAddress } from "utils/auth-wallet";
import appCallReadOnlyFunction from "utils/callReadOnlyFunctionStacks";
import { uintCV } from "@stacks/transactions";
import router from "next/router";

export default function Index() {
	const [nfts, setNfts] = useState([]);
	const [nftIds, setNftIds] = useState([]);
	const [imgs, setImgs] = useState([]);

	useEffect(() => {
		const stxAddress = myStxAddress();
		const contractIdentifier = "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA.MI-token-final-test-version::MI-token";

		fetch(`https://stacks-node-api.testnet.stacks.co/extended/v1/tokens/nft/holdings?principal=${stxAddress}`)
			.then((fetchData) => {
				fetchData.json().then((fetchDataJson) => {
					// console.log(fetchDataJson);
					const allNfts = fetchDataJson.results;

					const myNfts = allNfts.filter((nft) => {
						if (nft.asset_identifier === contractIdentifier) return nft;
					});

					let ids = [];
					myNfts.forEach((element) => {
						ids.push(parseInt(element.value.hex.slice(4)));
					});

					setNftIds(ids);
					setNfts(myNfts);
					fetchImages(ids);
				});
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	const fetchImages = (ids) => {
		const promiseList = [];
		ids.forEach((elem) => {
			promiseList.push(loadNftData(elem));
		});

		Promise.all(promiseList).then((imageUrls) => {
			setImgs(imageUrls);
		});
	};

	const loadNftData = (myNftId) => {
		return new Promise((resolve, reject) => {
			appCallReadOnlyFunction({
				contractAddress: "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA",
				contractName: "MI-token-final-test-version",
				functionName: "get-token-uri",
				functionArgs: [uintCV(myNftId)],
			})
				.then((value) => {
					const tokenUri = value.value.value.value;
					const imageUrl = "https://gaia.blockstack.org/hub/" + tokenUri + ".jpg";
					resolve(imageUrl);
				})
				.catch((e) => {
					console.log(e.message);
				});
		});
	};

	const handleNftInfoDisplay = (id) => {
		router.push({
			pathname: "/dashboard/single-nft",
			query: { id: id },
		});
	};

	return (
		<>
			<section className="mt-48 pb-40">
				<div>
					<div className="flex flex-auto mt-48 custom-txt-mainheading justify-center text-white">NFT COLLECTION</div>

					<div className="flex flex-wrap w-full pl-10">
						{nfts.map((nft, i) => {
							return (
								<div onClick={() => handleNftInfoDisplay(nftIds[i])} key={i} className="box-border flex w-full border-0 mt-12 custom-txt-title custom-bg-offwhite rounded px-4 pt-2 mr-8">
									<div className="box-border border-0 custom-bg-lightblue rounded-lg p-8 mb-2">
										<img src={imgs[i]} className="custom-txt-title"></img>
									</div>
									<div className="flex flex-col ml-10">
										<div className="custom-txt-normal text-wrap mb-2">NFT Id: {nftIds[i]}</div>
										<div className="custom-txt-normal text-wrap mb-2">Transaction ID: {nft.tx_id}</div>
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
