import React from "react";
import { createPopper } from "@popperjs/core";
import { useRouter } from "next/router";
import { AuthProvider } from "utils/auth";
import { userAuth } from "utils/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/compat/auth";
import firebaseClient from "utils/firebaseClient";

const firebaseAuth = getAuth(firebaseClient());
const provider = new GoogleAuthProvider();

const UserMenuDropdown = () => {
	// dropdown props
	const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
	const btnDropdownRef = React.createRef();
	const popoverDropdownRef = React.createRef();
	const router = useRouter();
	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: "top",
		});
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full sm:w-6/12 md:w-4/12 px-4">
					<div className="relative inline-flex align-middle w-full">
						<button
							className=" font-bold right-4 fixed top-4 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-white active:bg-blueGray-600 ease-linear transition-all duration-150"
							type="button"
							ref={btnDropdownRef}
							onClick={() => {
								dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
							}}
						>
							<div className="flex w-full justify-center items-center">
								<img className="rounded-full w-10 mr-3 border-black-100 border-2 border-solid" src="/img/angular.jpg" />
								<span className="mr-5">Username</span>
								<i className="fas fa-chevron-circle-down  fa-lg justify-end items-center "></i>
							</div>
						</button>
						<div ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"}>
							<a
								href=""
								className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 active:bg-yellow-500 active:text-black"
								onClick={(e) => {
									e.preventDefault();
									console.log("Clicked my Profile");
								}}
							>
								<div className="flex w-full text-base">
									<div className=" w-1/5">
										<i className="fa fa-user"></i>
									</div>
									<div className=" w-4/5">My Profile</div>
								</div>
							</a>
							<a
								href=""
								className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 active:bg-yellow-500 active:text-black"
								onClick={(e) => {
									e.preventDefault();
									console.log("Clicked my Profile");
								}}
							>
								<div className="flex w-full text-base">
									<div className=" w-1/5">
										<i className="fa fa-cog"></i>
									</div>
									<div className=" w-4/5">Settings</div>
								</div>
							</a>{" "}
							<a
								href=""
								className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 active:bg-yellow-500 active:text-black"
								onClick={async (e) => {
									e.preventDefault();
									await firebase
										.auth()
										.signOut()
										.then(() => {
											// Sign-out successful.
											localStorage.clear();

											router.push("/");
										})
										.catch((error) => {
											console.log("Signout Error: ", error);
											// An error happened.
										});
								}}
							>
								<div className="flex w-full text-base">
									<div className=" w-1/5">
										<i className="fa fa-sign-out-alt"></i>
									</div>
									<div className=" w-4/5">Sign Out</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserMenuDropdown;
