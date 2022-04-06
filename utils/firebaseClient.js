import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAODFeueMWHDJ9mi4K-A03uETqAA0gAE1Q",
    authDomain: "mint-it-b5b68.firebaseapp.com",
    projectId: "mint-it-b5b68",
    storageBucket: "mint-it-b5b68.appspot.com",
    messagingSenderId: "142791700405",
    appId: "1:142791700405:web:e41fbd74c0ad67f5de33fc",
    databseURL:"https://mint-it-b5b68.firebaseio.com"
  
  };

  export default function firebaseClient() {
    if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
}

  // const firestore = firebase.firestore();
  // export {firestore};
