import React, {useEffect, useState} from "react";
import Link from "next/link";
import LoginSignup from "components/Auth/loginSignupPopup";
import { userAcessToken } from "utils/fetchUserDetails";

export default function Navbar() {
	const [loginBtnShow, setLoginBtn] = useState(true);
	useEffect(() => {
		const accessToken = userAcessToken();

		if (accessToken) {	
			setLoginBtn(false);
		}
	}, []);
	return (
		<nav className="flex bg-blueGray-100 h-16 fixed top-0 z-50 w-full my-4 mx-4 items-center justify-center">
			<div className="w-1/12">
				
			</div>
			<div className="w-1/12">
				<div>
					<Link href="/">Mint It</Link>
				</div>
			</div>
			<ul className="flex w-8/12 items-center justify-center">
				<li className="mx-4">
					<Link href="/">About</Link>
				</li>
				<li className="mx-4">
					<Link href="/track">Track</Link>
				</li>
				<li className="mx-4">
					<Link href="/manufacturers-list">Verified Manufacturers</Link>
				</li>
				<li className="mx-4">
					<Link href="/">Contact</Link>
				</li>
				<li className="mx-4">
					<Link href="/">Journey</Link>
				</li>
			</ul>
			{loginBtnShow?<div className="flex w-2/12">
				<LoginSignup />
			</div>:null
			}
			
		</nav>
	);
}
