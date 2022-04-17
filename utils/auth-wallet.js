import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Storage } from "@stacks/storage";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
import { db } from "utils/firebaseClient";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const appConfig = new AppConfig(["store_write", "publish_data"]);

// Set this to true if you want to use Mainnet
const boolNetworkType = false;



export const userSession = new UserSession({ appConfig });
export const storage = new Storage({ userSession });

export function networkType() {
  if (boolNetworkType) return new StacksMainnet();
  else return new StacksTestnet();
}

export function myStxAddress() {
  if (boolNetworkType) return getUserData().profile.stxAddress.mainnet;
  else return getUserData().profile.stxAddress.testnet;
}

export function authenticate() {
  showConnect({
    appDetails: {
      name: "Mint It",
      icon: window.location.origin + "/logo.svg",
    },
    redirectTo: "/",
    onFinish: () => {
      // Get Access rights from smart contract

      // Reload Window
      const auth = getAuth();
      const user = auth.currentUser;
      const data = {
        stxAddress: myStxAddress(),
        email: user.email,
        status:"user"

      }
      const userDataRef = doc(db, "users", user.uid);
      const docData = data;
      setDoc(userDataRef, docData)
        .then(() => {
          console.log("Added data entry successfully");
          window.location.href = "/dashboard";
          
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log("Error when setting up the document", errorMessage);
        });
  
    },
    userSession: userSession,
  });
}

export function getUserData() {
  return userSession.loadUserData();
}
