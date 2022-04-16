/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import IndexLayout from "layouts/Index.js";
import { userAcessToken } from "utils/fetchUserDetails";

// Landing Page

export default function Index() {
	const [showLoginPop, setshowLoginPop] = React.useState(false);

	const router = useRouter();
	useEffect(() => {
		const accessToken = userAcessToken();

		if (accessToken) {
			router.push("/dashboard");
		}
	}, []);

	return (
		<>
			<section className="mt-48">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						{/* <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
							Check open
						</button> */}

						<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
							Mint it (M.I) is a web application that aims to bring transparency and fraud resistance to the supply chain of authentic products. M.I merges the concept of Blockchain and Supply Chain together which possesses
							the potential to benefit everyone involved in the trading of goods.
						</p>
					</div>
				</div>
			</section>

			<section className="pb-40">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">Our Mission Statement:</h2>
						<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
							“To allow for transparent supply chains and product journeys <br />
							so that users can make informed decisions about the products they buy”
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

Index.layout = IndexLayout;
