import { AuthProvider } from "utils/auth";
import { userAuth } from "utils/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import 'firebase/compat/auth';
import firebaseClient from 'utils/firebaseClient';


const firebaseAuth = getAuth(firebaseClient());
const provider = new GoogleAuthProvider()

const signInGoogle = async () => {

  const {user} =  await signInWithPopup(firebaseAuth, provider);
  const {refreshToken, providerData} = user;
  
  localStorage.setItem("user", JSON.stringify(providerData));
  localStorage.setItem("accessToken", JSON.stringify(refreshToken));

  return new Promise((resolve) => {
    resolve(user);
  })

  // window.location.href = "/dashboard"
  
}

const loginAuth = async (signinEmail, signinPassword) => {
    
                    
        await firebase.auth().signInWithEmailAndPassword(signinEmail, signinPassword).then(function(){
          console.log("Signed in Successful")
          window.location.href="/dashboard"

        }).catch(function(error){
          console.log("Error:", error.message)
          // const message = error.message;
          // setLoginError(message);
          // setLoginErrorShow(true);
        })
      
}

const signupAuth =  async (signupEmail, signupPasswordFirst)=>{
                        

    await firebase.auth().createUserWithEmailAndPassword( signupEmail, signupPasswordFirst).then(function(){
          window.location.href="/dashboard"
        }).catch(function(error){
          console.log(error.message)
        //   const message = error.message;
        //   setsignUpError(message);
        //   setsignUpErrorShow(true);
        })

      
    }
  

export {loginAuth, signupAuth,signInGoogle};