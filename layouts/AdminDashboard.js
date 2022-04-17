import React from "react";

import UserMenuDropdown from "components/Dropdowns/usermenudropdownAdmin";

// components

import AdminNavbar from "components/Navbars/AdminNavbar";

export default function Admin({ children }) {
	return (
		<>
			<AdminNavbar />
			<div className="relative md:ml-64 bg-black bg-[url('/img/dashboardbg.png')] bg-auto">
				<UserMenuDropdown className=" z-50 top-0 right-0 fixed" />

				<div className="px-4  mx-auto w-full -m-24">{children}</div>
			</div>
		</>
	);
}
