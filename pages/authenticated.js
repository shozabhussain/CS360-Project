import React from "react";
import nookies from "nookies";
import { verifyIdToken } from "utils/firebaseAdmin";
import { firebaseClient } from "utils/firebaseClient";
import firebase from "firebase/compat/app";

function Authenticated({ session }) {
  firebaseClient();
  if (session) {
    return (
      <>
        <div>Session Id: {session}</div>
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = "/";
          }}
        >
          Sign Out
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    console.log(uid, email);
    return {
      props: { session: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    console.log("Here: ", err);
    context.res.writeHead(302, { location: "/" });
    context.res.end();
    return { props: {} };
  }
}

export default Authenticated;
