import React, { useEffect } from "react";

import UserMenuDropdown from "components/Dropdowns/usermenudropdown";

import { getUserData, myStxAddress } from "utils/auth-wallet";
import { useRouter } from "next/router";

// components

import Sidebar from "components/Sidebar/Sidebar.js";
// import { useEffect } from "react/cjs/react.production.min";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
	const router = useRouter();
	useEffect(() => {
		try {
			const x = getUserData();
			console.log(x);
		} catch (err) {
			router.push("/connect-wallet");
		}
	}, []);

	return (
		<>
			<Sidebar />
			<div className="min-h-screen w-screen bg-black bg-[url('/img/dashboardbg.png')]">
				<div className="relative md:ml-64">
					<UserMenuDropdown className=" z-50 top-0 right-0 fixed" />

					<div className="px-4  mx-auto w-full -m-24">{children}</div>
				</div>
			</div>
		</>
	);
}
