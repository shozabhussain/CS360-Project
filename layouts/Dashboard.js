import React from "react";

import UserMenuDropdown from "components/Dropdowns/usermenudropdown";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
	return (
		<>
			<Sidebar />
			{/* <AdminNavbar /> */}
			<div className="relative md:ml-64 ">
				{/* <AdminNavbar /> */}
				{/* Header */}
				{/* <HeaderStats /> */}
				<div className="w-full px-4 mx-auto -m-24 md:px-10">
					{children}
					{/* <FooterAdmin /> */}
				</div>
			</div>
		</>
	);
}
