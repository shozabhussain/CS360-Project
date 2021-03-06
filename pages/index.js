/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import IndexLayout from "layouts/Index.js";
import { userAcessToken } from "utils/fetchUserDetails";
import { getUserData } from "utils/auth-wallet";

// Landing Page

export default function Index() {
	const [showLoginPop, setshowLoginPop] = React.useState(false);

	const router = useRouter();
	useEffect(() => {
		const accessToken = userAcessToken();

		if (accessToken) {
			try {
				const x = getUserData();
				console.log(x);
				router.push("/dashboard");
			} catch (err) {
				router.push("/connect-wallet");
			}
		}
	}, []);

	return (
		<>
			<section className="">
				<div className="justify-center text-center flex flex-wrap">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<p className="mt-48 text-lg leading-relaxed mb-4 text-white">
							Mint it (M.I) is a web application that aims to bring transparency and fraud resistance to the supply chain of authentic products. M.I merges the concept of Blockchain and Supply Chain together which possesses
							the potential to benefit everyone involved in the trading of goods.
						</p>
					</div>
				</div>
			</section>

			<section className="pb-40">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl text-white">Our Mission Statement:</h2>
						<p className="text-lg leading-relaxed mt-4 mb-4 text-white">
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
