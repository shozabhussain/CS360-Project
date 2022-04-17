/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import appCallReadOnlyFunction from "utils/callReadOnlyFunctionStacks";
import { standardPrincipalCV, uintCV } from "@stacks/transactions";
import { networkType, myStxAddress } from "utils/auth-wallet";
import { openContractCall } from "@stacks/connect";

import DashboardLayout from "layouts/Dashboard";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "utils/firebaseClient";

export default function Index() {
	const router = useRouter();
	const [nftId, setNftId] = useState(0);
	const [imageSource, setImageSource] = useState();
	const [nftData, setNftData] = useState();

	useEffect(() => {
		let myNftId = parseInt(router.query.id);

		if (myNftId < 0) {
			myNftId *= -1;
		}

		setNftId(parseInt(router.query.id));

		loadNftData(myNftId);
	}, []);

	const loadNftData = (myNftId) => {
		appCallReadOnlyFunction({
			contractAddress: "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA",
			contractName: "MI-token-final-test-version",
			functionName: "get-token-uri",
			functionArgs: [uintCV(myNftId)],
		})
			.then((value) => {
				const tokenUri = value.value.value.value;
				loadDataFromUri(tokenUri);
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	const loadDataFromUri = (tokenUri) => {
		const fileUrl = "https://gaia.blockstack.org/hub/" + tokenUri + ".json";
		const imageUrl = "https://gaia.blockstack.org/hub/" + tokenUri + ".jpg";

		setImageSource(imageUrl);

		fetch(fileUrl)
			.then((response) => {
				response
					.text()
					.then((data) => {
						setNftData(JSON.parse(data));
					})
					.catch((e) => {
						console.log(e.message);
					});
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	const handleTransferNft = () => {
		Swal.fire({
			title: "Input STX address of the recipient",
			input: "text",
			inputLabel: "STX address",
			inputPlaceholder: "STASBDKJASHHDU545ASJDBJASBD548ZADYWGBSAJB",
		}).then((data) => {
			const stxAddress = data.value;

			transferNft(stxAddress);
		});
	};

	const transferNft = (stxAddress) => {
		// const functionArgs = [uintCV(nftId), standardPrincipalCV(myStxAddress()), standardPrincipalCV(stxAddress)];
		const functionArgs = [standardPrincipalCV(myStxAddress()), standardPrincipalCV(stxAddress)];

		const options = {
			contractAddress: "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA",
			contractName: "MI-token-final-test-version",
			functionName: "transfer",
			functionArgs,
			network: networkType(),
			appDetails: {
				name: "Mint It",
				icon: window.location.origin + "/logo.svg",
			},
			onFinish: (data) => {
				console.log("Stacks Transaction:", data.stacksTransaction);
				console.log("Transaction ID:", data.txId);
				console.log("Raw transaction:", data.txRaw);

				// Add this transaction to the database
				addDoc(collection(db, "transactions"), {
					txId: data.txId,
					txRaw: data.txRaw,
					stxAddress: myStxAddress(),
				}).then(() => {
					Swal.fire("Transaction Successfully added to mempool");
				});
			},
		};

		openContractCall(options);
	};

	return (
		<>
			<section className="mt-48 pb-40">
				<div className="fcontainerNew">
					<div className="fitemLeft">
						<img src={imageSource} className="font-bold text-3xl mt-48 text-center"></img>
					</div>

					<div className="fitemRight">
						<div className="fitemRightInner">
							<h2 className="font-bold text-1xl mt-4 indent-2">Product Name: {nftData ? nftData.productName : null}</h2>

							<h2 className="font-bold text-1xl mt-2 indent-2">Product Size: {nftData ? nftData.size : null}</h2>

							<h2 className="font-bold text-1xl mt-2 indent-2">Product Color: {nftData ? nftData.color : null}</h2>

							<h2 className="font-bold text-1xl mt-2 indent-2">Other Metadata...</h2>
						</div>

						<div className="fitemRightInner">
							<h2 className="font-bold text-1xl mt-4 indent-2">Product Attributes</h2>

							<button onClick={handleTransferNft} className="fitemButton font-bold text-1xl mt-100">
								Transfer NFT
							</button>
						</div>
					</div>
				</div>

				<div className="fcontainerChain justify-center text-center flex flex-wrap">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-bold text-4xl text-white">Product Timeline</h2>

						<div className="fText mt-10">
							<img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />

							<div>
								<h2 className="font-bold text-2xl text-white mt-6">Manufacturer Address</h2>

								<h2 className="font-bold text-1xl text-white">SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0</h2>

								<h2 className="font-bold text-1xl text-white">Day Month Year</h2>
							</div>
						</div>

						<div className="fTextLeft text-right">
							<div>
								<h2 className="font-bold text-2xl text-white mt-6">Next Owner Address</h2>

								<h2 className="font-bold text-1xl text-white">SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0</h2>

								<h2 className="font-bold text-1xl text-white">Day Month Year</h2>
							</div>

							<img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />
						</div>

						<div className="fText">
							<img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />

							<div>
								<h2 className="font-bold text-2xl text-white mt-6">Next Owner Address</h2>

								<h2 className="font-bold text-1xl text-white">SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0</h2>

								<h2 className="font-bold text-1xl text-white">Day Month Year</h2>
							</div>
						</div>

						<div className="fTextLeft text-right">
							<div>
								<h2 className="font-bold text-2xl text-white mt-6">Next Owner Address</h2>

								<h2 className="font-bold text-1xl text-white">SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0</h2>

								<h2 className="font-bold text-1xl text-white">Day Month Year</h2>
							</div>

							<img alt="..." className="w-15 mr-1" src="/img/chain.JPG" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

Index.layout = DashboardLayout;
