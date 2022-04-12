import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const admin = require("firebase-admin");
const serviceAccount = require("../secret.json")

export const verifyIdToken = (token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databseURL:"https://mint-it-b5b68.firebaseio.com"

        });
    }
    return admin.auth().verifyIdToken(token).catch((error) =>{
        throw error;
    });
}