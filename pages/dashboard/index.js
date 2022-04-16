/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

import DashboardLayout from "layouts/Dashboard.js";
import { AuthProvider } from "utils/auth";
import { userAuth } from "utils/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { userAcessToken } from "utils/fetchUserDetails";
import { firebaseClient } from "utils/firebaseClient";
import { useRouter } from "next/router";
import { storage } from "utils/auth-wallet";
// Landing Page

export default function Index() {
	const router = useRouter();
	useEffect(() => {
		// Load Gaia Hub
		storage.listFiles(() => {});

		const accessToken = userAcessToken();
		if (!accessToken) {
			router.push("/");
		}
	}, []);
	const { user } = userAuth();
	firebaseClient();
	return (
		<>
			<section className="mt-48 pb-40">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">Dashboard</h2>
					</div>
				</div>
			</section>

			<section className="pt-48 pb-40 text-white">
				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">Edit Profile</h2>
					</div>
				</div>
			</section>
		</>
	);
}

Index.layout = DashboardLayout;
