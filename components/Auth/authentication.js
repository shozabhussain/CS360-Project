import { AuthProvider } from "utils/auth";
import { userAuth } from "utils/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/compat/auth";
import firebaseClient from "utils/firebaseClient";
import { useRouter } from "next/router";

const firebaseAuth = getAuth(firebaseClient());
const provider = new GoogleAuthProvider();

const walletConnect = async () => {
  return new Promise((resolve) => {
    resolve(1);
  });

  // window.location.href = "/dashboard"
};

const signInGoogle = async () => {
  const { user } = await signInWithPopup(firebaseAuth, provider);
  const { refreshToken, providerData } = user;

  localStorage.setItem("user", JSON.stringify(providerData));
  localStorage.setItem("accessToken", JSON.stringify(refreshToken));

  return new Promise((resolve) => {
    resolve(user);
  });

  // window.location.href = "/dashboard"
};

const loginAuth = async (signinEmail, signinPassword) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(signinEmail, signinPassword)
    .then(function () {
      console.log("Signed in Successful");
      return new Promise((resolve) => {
        resolve(1);
      });
    })
    .catch(function (error) {
      console.log("Error:", error.message);
      // const message = error.message;
      // setLoginError(message);
      // setLoginErrorShow(true);
    });
};

const signupAuth = async (signupEmail, signupPasswordFirst) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(signupEmail, signupPasswordFirst)
    .then(function () {
      return new Promise((resolve) => {
        resolve(1);
      });
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

export { loginAuth, signupAuth, signInGoogle, walletConnect };
