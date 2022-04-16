import React, { useState } from "react";

import DashboardLayout from "layouts/Dashboard.js";
import { QrReader } from "react-qr-reader";

export default function Index() {
	const [qrResult, setQrResult] = useState(-1);

	return (
		<>
			<section className="mt-48 pb-40">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">Track Ownership of a Product</h2>
						<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">Scan the QR code on the backside of the product</p>
						<QrReader
							onResult={(result, error) => {
								if (!!result) {
									setQrResult(result?.text);
								}

								if (!!error) {
									console.info(error);
								}
							}}
							className="w-full"
							constraints={{
								facingMode: "environment",
							}}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

Index.layout = DashboardLayout;
