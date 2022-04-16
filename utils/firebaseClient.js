import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_databaseURL,
};

export function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const firestore = firebase.firestore();
// export {firestore};
