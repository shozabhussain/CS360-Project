/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";

import DashboardLayout from "layouts/Dashboard.js";
import { myStxAddress } from "utils/auth-wallet";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "utils/firebaseClient";

// Landing Page

export default function Index() {
	const [transactionsList, setTransactionsList] = useState([]);

	useEffect(() => {
		getTransactions();
	}, []);

	const getTransactions = () => {
		const stxAddress = myStxAddress();
		const q = query(collection(db, "transactions"), where("stxAddress", "==", stxAddress));

		getDocs(q).then((querySnapshot) => {
			const promiseList = [];

			querySnapshot.forEach((doc) => {
				const txId = doc.data().txId;
				promiseList.push(fetch(`https://stacks-node-api.testnet.stacks.co/extended/v1/address/${stxAddress}/${txId}/with_transfers`));
			});

			Promise.all(promiseList)
				.then((fetchDataList) => {
					const jsonList = [];

					fetchDataList.forEach((data) => {
						jsonList.push(data.json());
					});

					Promise.all(jsonList).then((dataList) => {
						setTransactionsList(dataList);
					});
				})
				.catch((e) => {
					console.log(e.message);
				});
		});
	};

	return (
		<div className=" h-full w-full ">
			<div className="flex flex-auto pt-48 text-white custom-txt-mainheading justify-center">TRANSACTIONS</div>

			<div className="mx-4 px-12 mt-8 justify-center items-center ">
				<div className="w-full box-border custom-bg-offwhite rounded-lg  justify-center items-center py-3 p-14">
					<div className="flex flex-wrap w-full">
						<button className="bg-black mx-auto hover:bg-blue-700 text-white font-bold py-2 px-12 rounded custom-bg-lightblue justify-center">Failed</button>

						<button className="bg-white mx-auto flex flex-wrap hover:bg-blue-700 text-black font-bold py-2 px-12 rounded custom-bg-lightblue justify-center">
							<div className="mr-3">
								<i className="fa fa-check-circle fa-lg"></i>
							</div>
							<div>Confirmed</div>
						</button>

						<button className="bg-white mx-auto flex hover:bg-blue-700 text-black font-bold py-2 px-12 rounded custom-bg-lightblue justify-center">
							<div className="mr-3">
								<i className="fa fa-exclamation-triangle fa-lg"></i>
							</div>
							<div>Pending</div>
						</button>
					</div>

					<div>
						<hr className="w-full mt-5 border-gray-300 border-2"></hr>
					</div>

					{/* <div className="box-border w-full border-0 flex flex-wrap custom-bg-darkblue rounded-lg p-5 my-4">
						<div className="w-10/12 text-white">
							<p>
								<span className="mr-1 custom-txt-normal-mitr">TX ID:</span>
								0x2710cc02becd284a6b9b75da0fe6d830c38b7330044bfa06868992746fd85598
							</p>

							<p>
								<span className="mr-1 custom-txt-normal-mitr">Recipient Address:</span>
								SP3HXJJMJQ06GNAZ8XWDN1QM48JEDC6PP6W3YZPZJ
							</p>

							<p>
								<span className="mr-1 custom-txt-normal-mitr">Fees:</span>
								0.00018 STX
							</p>
						</div>

						<div className="w-2/12 ml-3 justify-center items-center">
							<div>
								<button className="custom-bg-lightblue py-1 px-3 my-auto mx-auto hover:bg-blue-700 text-white font-bold rounded custom-bg-lightblue justify-center">Retry</button>
							</div>

							<div className="my-4 justify-end items-center pl-4 ml-1">
								<i className="fas fa-chevron-circle-down  fa-lg justify-end items-center "></i>
							</div>
						</div>
					</div> */}

					{transactionsList.map((trans, i) => {
						return (
							<div key={i} className="box-border w-full border-0 flex flex-wrap custom-bg-darkblue rounded-lg p-5 my-4">
								<div className="w-10/12 text-white">
									<p>
										<span className="mr-1 custom-txt-normal-mitr">Transaction ID: </span>
										{trans.tx ? trans.tx.tx_id : null}
									</p>

									<p>
										<span className="mr-1 custom-txt-normal-mitr">Sender's Address:</span>
										{trans.tx ? trans.tx.sender_address : null}
									</p>

									<p>
										<span className="mr-1 custom-txt-normal-mitr">Fees:</span>
										{trans.tx ? trans.tx.fee_rate : null}
									</p>

									<p>
										<span className="mr-1 custom-txt-normal-mitr">Nonce:</span>
										{trans.tx ? trans.tx.nonce : null}
									</p>

									<p>
										<span className="mr-1 custom-txt-normal-mitr">Time Initiated:</span>
										{trans.tx ? trans.tx.parent_burn_block_time_iso : null}
									</p>

									<p>
										<span className="mr-1 custom-txt-normal-mitr">Status:</span>
										{trans.tx ? trans.tx.tx_status : null}
									</p>
								</div>

								{/* <div className="w-2/12 ml-3 justify-center items-center">
									<div>
										<button className="custom-bg-lightblue py-1 px-3 my-auto mx-auto hover:bg-blue-700 text-white font-bold rounded custom-bg-lightblue justify-center">Retry</button>
									</div>

									<div className="my-4 justify-end items-center pl-4 ml-1">
										<i className="fas fa-chevron-circle-up fa-lg justify-end items-center "></i>
									</div>
								</div> */}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

Index.layout = DashboardLayout;
