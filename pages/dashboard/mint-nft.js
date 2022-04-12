/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";

import DashboardLayout from "layouts/Dashboard.js";

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

	const handleMintNft = () => {
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
			<section className="mt-48 pb-10">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl pb-16 mt-12">MINT NFT PRODUCT</h2>
					</div>
					<div className="fcontainer  pb-6">
						<img className="fitemLarge item1 font-semibold text-1xl" src={imgPreview}></img>
						{/* <div>
							<div className="fitemMedium item3 font-semibold text-1xl">Click to Upload an Image</div>
							<h2 className="font-semibold text-2xl">Product Name:</h2>
							<div className="fitemSmall item3 font-semibold text-1xl">Enter product name</div>
							<h2 className="font-semibold text-2xl">Category:</h2>
							<div className="fitemSmall item3 font-semibold text-1xl">Select Category</div>
							<h2 className="font-semibold text-2xl">Manufacturing Date:</h2>
							<div className="fitemSmall item3 font-semibold text-1xl">__/__/__</div>
						</div> */}
						<div className="text-left">
							<div className="relative w-full mb-3">
								<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
									Click to Upload an Image
								</label>
								<input
									type="file"
									className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="NFT Image"
									onChange={handleImageInput}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
									Product Name
								</label>
								<input
									type="text"
									className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Enter product name"
									value={productName}
									onChange={(e) => setProductName(e.target.value)}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
									Category
								</label>
								<input
									type="text"
									className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Select category"
									value={category}
									onChange={(e) => setCategory(e.target.value)}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
									Manufacturing Date
								</label>
								<input
									type="date"
									className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Manufacturing Date"
									value={manufacturingDate}
									onChange={(e) => setManufacturingDate(e.target.value)}
								/>
							</div>
						</div>
					</div>

					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl mt-12">ATTRIBUTES</h2>
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
							<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
								Size
							</label>
							<input
								type="text"
								className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Enter Size"
								value={size}
								onChange={(e) => setSize(e.target.value)}
							/>
						</div>

						<div className="relative w-full mb-3">
							<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
								Color
							</label>
							<input
								type="text"
								className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Enter Color"
								value={color}
								onChange={(e) => setColor(e.target.value)}
							/>
						</div>
						<div className="relative w-full mb-3">
							<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
								Design Type
							</label>
							<input
								type="text"
								className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Select Design"
								value={design}
								onChange={(e) => setDesign(e.target.value)}
							/>
						</div>
						<div className="relative w-full mb-3">
							<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
								Country of Manufacture
							</label>
							<input
								type="text"
								className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Select Country"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</div>
						<div className="relative w-full mb-3">
							<label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
								Gender
							</label>
							<input
								type="text"
								className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Select Gender"
								value={gender}
								onChange={(e) => setGender(e.target.value)}
							/>
						</div>
					</div>

					<div></div>
				</div>
			</section>
			<div className="fconButton justify-center text-center">
				<button onClick={handleMintNft} className="fitemMediumNext justify-center text-center font-semibold text-2xl mt-16">
					MINT IT!!!
				</button>
			</div>
		</>
	);
}

Index.layout = DashboardLayout;
