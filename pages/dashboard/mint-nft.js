/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";

import DashboardLayout from "layouts/Dashboard.js";

import { getUserData, networkType, storage, myStxAddress } from "utils/auth-wallet";
import { createSha2Hash } from "@stacks/encryption";
import { openContractCall } from "@stacks/connect";

import { standardPrincipalCV, stringAsciiCV, bufferCV } from "@stacks/transactions";

import { v4 as uuidv4 } from "uuid";

// Landing Page

export default function Index() {
	const [nftImg, setNftImg] = useState();
	const [imgPreview, setImgPreview] = useState("");

	const [productName, setProductName] = useState();
	const [category, setCategory] = useState();
	const [manufacturingDate, setManufacturingDate] = useState();
	const [size, setSize] = useState();
	const [color, setColor] = useState();
	const [design, setDesign] = useState();
	const [country, setCountry] = useState();
	const [gender, setGender] = useState();

	useEffect(() => {
		storage.listFiles((names) => console.log(names));
	}, []);

	const handleMintNft = () => {
		const imageStr = nftImg.toString();
		const imageBuff = Buffer.from(imageStr);

		const nftMetaData = {
			productName: productName,
			category: category,
			manufacturingDate: manufacturingDate,
			size: size,
			color: color,
			design: design,
			country: country,
			gender: gender,
		};
		const fileContent = JSON.stringify(nftMetaData);

		const fileOptions = {
			encrypt: false,
			contentType: "application/json",
			dangerouslyIgnoreEtag: true,
		};
		const imageFileOptions = {
			encrypt: false,
			contentType: "image/jpeg",
			dangerouslyIgnoreEtag: true,
		};

		// Now calculate the hash of the filedata
		const dataBuff = Buffer.from(fileContent);
		const wholeBuff = Buffer.concat([dataBuff, imageBuff]);

		const randomId = uuidv4().toString().slice(0, 29);
		const fileName = randomId + ".json";
		const imageFileName = randomId + ".jpg";

		const tokenUri = getUserData().gaiaHubConfig.address + "/" + randomId;

		createSha2Hash().then((sha2Hash) => {
			sha2Hash.digest(wholeBuff, "sha256").then((resultBuff) => {
				Promise.all([storage.putFile(fileName, fileContent, fileOptions), storage.putFile(imageFileName, nftImg, imageFileOptions)])
					.then(() => {
						// Successfully placed all the files

						const functionArgs = [standardPrincipalCV(myStxAddress()), bufferCV(resultBuff), stringAsciiCV(tokenUri)];

						const options = {
							contractAddress: "STWT4MSG1A77TYD4YQ0R9VRWQAV9D1JH0EHK4QCA",
							contractName: "MI-token-final-test-version",
							functionName: "mint",
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
							},
						};

						openContractCall(options);
					})
					.catch((e) => {
						console.log(e.message);
						console.log("There were some troubles uploading information on your Gaia Hub, kindly retry. If this error persists then please try back in a few minuters");
					});
			});
		});
	};

	const handleImageInput = (e) => {
		setNftImg(e.target.files[0]);

		let file = e.target.files[0];
		let reader = new FileReader();
		let url = reader.readAsDataURL(file);

		reader.onloadend = function (e) {
			setImgPreview([reader.result]);
		};
	};

	return (
		<>
			{/* <link rel="stylesheet" href="style.css"></link> */}
			<section className="mt-48 pb-10 bg-gray-900">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4 mb-6">
						<h2 className="font-semibold text-4xl pb-16 mt-12 text-white">MINT NFT PRODUCT</h2>
					</div>
					<div className="fcontainer  pb-6">
						<img className="fitemLarge font-semibold text-1xl" src={imgPreview}>
						</img>

						<h1 className="-ml-64 mr-60 font-bold text-black">
							Image Preview
						</h1>
						{/* <div>
							<div className="fitemMedium item3 font-semibold text-1xl">Click to Upload an Image</div>
							<h2 className="font-semibold text-2xl">Product Name:</h2>
							<div className="fitemSmall item3 font-semibold text-1xl">Enter product name</div>
							<h2 className="font-semibold text-2xl">Category:</h2>
							<div className="fitemSmall item3 font-semibold text-1xl">Select Category</div>
							<h2 className="font-semibold text-2xl">Manufacturing Date:</h2>
							<div className="fitemSmall item3 font-semibold text-1xl">__/__/__</div>
						</div> */}
						<div className="text-left mt-4">
							<div className="relative w-full mb-5">
								{/* <label className="block  text-white text-xs font-bold mb-2" htmlFor="grid-password"> */}
								{/* <label className="fitemMedium font-semibold text-1xl" htmlFor="grid-password">
									Click to Upload an Image
								</label> */}
								<div className="fitemMedium item3 font-semibold text-1xl -mb-4">
									<h2 className="mt-4">
										Click to
									</h2>

									<h1 className="font-bold text-2xl">
										Upload an Image
									</h1>
								</div>
								<input
									type="file"
									// className="rounded-lg text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									// className = "fitemMedium item3 font-semibold text-1xl"
									placeholder="NFT Image"
									onChange={handleImageInput}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
									{/* Product Name */}
									<h2 className="font-bold text-1xl">Product Name:</h2>
								</label>
								<input
									type="text"
									className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Enter product name"
									value={productName}
									onChange={(e) => setProductName(e.target.value)}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
									Category:
								</label>
								<input
									type="text"
									className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Select category"
									value={category}
									onChange={(e) => setCategory(e.target.value)}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
									Manufacturing Date:
								</label>
								<input
									type="date"
									className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Manufacturing Date"
									value={manufacturingDate}
									onChange={(e) => setManufacturingDate(e.target.value)}
								/>
							</div>
						</div>
					</div>

					<div className="w-full md:w-6/12 px-12 md:px-4 mt-4 -mb-24">
						<h2 className="font-semibold text-4xl mt-12 text-white">ATTRIBUTES</h2>
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

					<div className="fcontainerSecond mt-10">
						{/* <div>
							<h2 className="fitemTitle font-semibold text-2xl">Size:</h2>
							<div className="fitemSmall item1 mt-5 font-semibold text-1xl"> Enter Size</div>
						</div>

						<div>
							<h2 className="fitemTitle font-semibold text-2xl">Color:</h2>
							<div className="fitemSmall item1 mt-5 font-semibold text-1xl">Enter Color</div>
						</div>

						<div>
							<h2 className="fitemTitle font-semibold text-2xl">Design Type:</h2>
							<div className="fitemSmall item1 mt-5 font-semibold text-1xl">Select Design</div>
						</div> */}
					</div>

					<div className="fcontainerSecond text-left">
						{/* <div>
							<h2 className="fitemTitle font-semibold text-2xl">Country of Manufacture:</h2>
							<div className="fitemSmall item1 mt-5 font-semibold text-1xl">Select Country</div>
						</div>

						<div>
							<h2 className="fitemTitle font-semibold text-2xl">Gender:</h2>
							<div className="fitemSmall item1 mt-5 font-semibold text-1xl"> Select Gender</div>
						</div> */}
					
						<div className="relative w-full mb-3">
							<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
								Size:
							</label>
							<input
								type="text"
								className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
								placeholder="Enter Size"
								value={size}
								onChange={(e) => setSize(e.target.value)}
							/>
						</div>

						<div className="relative w-full mb-3">
							<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
								Color:
							</label>
							<input
								type="text"
								className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
								placeholder="Enter Color"
								value={color}
								onChange={(e) => setColor(e.target.value)}
							/>
						</div>
						<div className="relative w-full mb-3">
							<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
								Design Type:
							</label>
							<input
								type="text"
								className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
								placeholder="Select Design"
								value={design}
								onChange={(e) => setDesign(e.target.value)}
							/>
						</div>
					</div>
					
					<div className="fcontainerSecond text-left p-x-2">
						<div className="relative w-full mb-3">
							<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
								Country of Manufacture:
							</label>
							<input
								type="text"
								className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
								placeholder="Select Country"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</div>
						
						<div className="relative w-full mb-3">
							<label className="block  text-white text-s font-bold mb-2" htmlFor="grid-password">
								Gender:
							</label>
							<input
								type="text"
								className="font-bold border-2 border-white px-3 py-3 placeholder-gray-500 text-white bg-black rounded-lg text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
								placeholder="Select Gender"
								value={gender}
								onChange={(e) => setGender(e.target.value)}
							/>
						</div>
						
					</div>

					<div></div>
				</div>
			</section>
			<div className="fconButton justify-center text-center bg-gray-900">
				<button onClick={handleMintNft} className="fitemMediumNext justify-center text-center font-bold text-2xl mt-4">
					MINT IT
				</button>
			</div>
		</>
	);
}

Index.layout = DashboardLayout;
