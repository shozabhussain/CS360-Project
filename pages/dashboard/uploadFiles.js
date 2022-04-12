import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { getAuth } from "firebase/auth";

import { db } from "utils/firebaseClient";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth();

const storage = getStorage();
let promises = [];

let downloadURLS = {};
const uploadFiles = async (file, filename_fixed) => {
  const user = auth.currentUser;
  console.log(user);
  if (!file) return;
  const storageRef = ref(
    storage,
    `/verification_files/${user.uid}/${filename_fixed}`
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        downloadURLS[filename_fixed] = downloadURL;
      });
    }
  );

  promises.push(uploadTask);
};
const allPromises = () => {
  return promises;
};

const getURLs = () => {
  return downloadURLS;
};

const clearPromises = () => {
  promises = [];
  downloadURLS = {};
};

export { uploadFiles, allPromises, clearPromises, getURLs };
