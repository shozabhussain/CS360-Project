/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";

import DashboardLayout from "layouts/Dashboard.js";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "utils/firebaseClient";

// Landing Page

export default function Index() {
	const [manufacturersList, setManufacturersList] = useState([]);

	const auth = getAuth();

	useEffect(() => {
		getManufacturers();
	}, []);

	const getManufacturers = () => {
		const q = query(collection(db, "verification-proposals"), where("status", "==", "verified"));

		getDocs(q).then((querySnapshot) => {
			const data = [];

			querySnapshot.forEach((doc) => {
				data.push(doc.data());
			});

			setManufacturersList(data);
		});
	};

	return (
		<div>
			<div className="flex flex-auto mt-32 custom-txt-mainheading justify-center">List of all Verified Manufacturers</div>

			<section className="pb-40">
				<div className="justify-center flex flex-wrap">
					<div className="w-full md:w-8/12 px-12 md:px-2">
						{manufacturersList.map((manu, i) => {
							return (
								<div key={i} className="box-border border-4 flex flex-auto mt-12 custom-txt-title custom-bg-offwhite rounded-lg p-5">
									<div className="w-3/12 pr-12">{manu.companyName}</div>

									<div className="w-8/12 pl-10 pr-12">
										<div>Wallet Address</div>

										<div className="custom-txt-normal">{manu.walletAddress}</div>
									</div>

									<div>
										<i className="fas fa-chevron-circle-down w-1/12 pl-10 pt-6 fa-lg "></i>
									</div>

									<div></div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

Index.layout = DashboardLayout;
