import { networkType, myStxAddress } from "./auth-wallet";
import { callReadOnlyFunction, cvToJSON } from "@stacks/transactions";

export default async function appCallReadOnlyFunction(optionsProps) {
	if (!optionsProps) return new Promise((resolve, reject) => reject("no arguments provided"));

	const options = {
		...optionsProps,
		network: networkType(),
		senderAddress: myStxAddress(),
	};

	return callReadOnlyFunction(options)
		.then((response) => {
			const responseJson = cvToJSON(response);

			return new Promise((resolve, reject) => resolve(responseJson));
		})
		.catch((e) => {
			return new Promise((resolve, reject) => reject(e));
		});
}
