/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { getUserDetails } from "utils/authentication";
import { getAuth } from "firebase/auth";
import DashboardLayout from "layouts/Dashboard.js";

import { db } from "utils/firebaseClient";
import { doc, setDoc } from "firebase/firestore";
import {
  uploadFiles,
  allPromises,
  clearPromises,
  getURLs,
  uploadFilesOnebyOne
} from "./uploadFiles";

// Landing Page

export default function Index() {
  const [companyName, setCompanyName] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [llcNum, setLlcNum] = useState("");
  const [regTrademark, setRegTrademark] = useState("");
  const [llcFile, setLlcFile] = useState();
  const [tradeMarkFile, setTradeMarkFile] = useState();
  const [officialLogo, setOfficialLogo] = useState();
  const [recentBankStatement, setRecentBankStatement] = useState();
  const [successMessageShow, setSuccessMessageShow] = useState(false);

  const submitData = async () => {
    clearPromises();
    let urls = {};
    urls = getURLs();


    console.log("url before", urls)
    let companyData = {
      companyName: companyName,
      companyStartDate: companyStartDate,
      llcNum: llcNum,
      regTrademark: regTrademark,
     
    };

    uploadFiles(llcFile, "LLC");
    uploadFiles(tradeMarkFile, "Trademark");
    uploadFiles(recentBankStatement, "Bank Statement");
    uploadFiles(officialLogo, "Logo");
    
    //console.log("prom1", prom1)
    const allProm = allPromises();

   console.log("Promises",allProm)

    await Promise.all(allProm).then((f) => {
      console.log("F: ", f)
      //uploadFilesOnebyOne(f)
      let urls = {};
      urls = getURLs();
      //console.log(urls)
      companyData["files"] = urls

      setSuccessMessageShow(true);
      
      sendDatatoDb(companyData)
      //clearPromises();
    });
  };

  const auth = getAuth();
  const user = auth.currentUser;

  const sendDatatoDb = (data) => {
    const userDataRef = doc(db, "pendingVerificationCases", user.uid);
				const docData = data
				setDoc(userDataRef, docData)
					.then(() => {
						console.log("Added data entry successfully");

						// Redirect user to dashboard
						//router.push("/user/dashboard");
					})
					.catch((error) => {
						const errorMessage = error.message;
						console.log("Error when setting up the document", errorMessage);
					});
  }
  

  return (
    <>


      <section className="pt-48 pb-40 text-white">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full ">
            <h2 className="font-semibold text-4xl">Apply for Verification</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitData();
            }}
          >
            <h6 className="text-blueGray-300 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Registered Company Name:
                  </label>
                  <input
                    required
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Company name (as on documents)"
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                  />
                </div>
              </div>
              <div className="w-full w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Company Started On:
                  </label>
                  <input
                    required
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setCompanyStartDate(e.target.value)}
                    value={companyStartDate}
                  />
                </div>
              </div>
              <div className="w-full w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    LLC Number:
                  </label>
                  <input
                    required
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setLlcNum(e.target.value)}
                    value={llcNum}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Any Registered Trademark:
                  </label>
                  <input
                    required
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setRegTrademark(e.target.value)}
                    value={regTrademark}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-300 text-sm mt-3 mb-6 font-bold uppercase">
              Upload Files
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    LLC:
                  </label>
                  <input
                    required
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setLlcFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className=" w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Trademark:
                  </label>
                  <input
                    required
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setTradeMarkFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className=" w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Official Logo
                  </label>
                  <input
                    required
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setOfficialLogo(e.target.files[0])}
                  />
                </div>
              </div>
              <div className=" w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-warmGray-100 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Recent Bank Statement:
                  </label>
                  <input
                    required
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setRecentBankStatement(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="w-full  px-4">
                <div className="relative justify-center items-center  mt-3">
                  <input
                    required
                    type="submit"
                    className="border-0 px-3 w-1/6 bg-yellow-500 text-black py-3 rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>
          </form>
          {successMessageShow ? (
            <div className="lg:w-1/2 md:w-full flex text-center text-white mt-4 justify-center items-center bg-green-700 p-5 rounded-lg">
              <div>
                <i className="fa fa-check mr-2"></i>
              </div>
              <div>Successful! your application is successfully submitted</div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

Index.layout = DashboardLayout;
