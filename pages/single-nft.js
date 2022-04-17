/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import appCallReadOnlyFunction from "utils/callReadOnlyFunctionStacks";
import { standardPrincipalCV, uintCV } from "@stacks/transactions";
import { networkType, myStxAddress } from "utils/auth-wallet";
import { openContractCall } from "@stacks/connect";

import IndexLayout from "layouts/Index.js";

export default function Index() {
	const router = useRouter();
	const [nftId, setNftId] = useState(0);
	const [imageSource, setImageSource] = useState();
	const [nftData, setNftData] = useState();

	useEffect(() => {
		setNftId(parseInt(router.query.id));

		loadNftData();
	}, []);

	const loadNftData = () => {
		appCallReadOnlyFunction({
			contractAddress: "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA",
			contractName: "MI-token-final-test-version",
			functionName: "get-token-uri",
			functionArgs: [
				// enter all your function arguments here but cast them to CV first
				uintCV(nftId),
			],
		})
			.then((value) => {
				console.log(value);

				// TODO: Set token uri from here
				const tokenUri = "18RZ9bBfkNgvZaUVGaxHFWCzRoRh5Vo4Ef/a9c29509-9c51-4153-821b-c453e";
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

Index.layout = IndexLayout;
