/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <>
      <div className="mx-4 border-2 mt-24 px-12">
        <div className="justify-center text-center w-full flex flex-wrap mt-24 custom-txt-title pt-0 border-2">
          Verification Request Proposal
        </div>

        <div className="flex flex-wrap border-2 mt-10">
          <div className="flex items-center justify-center">
            <div className="datepicker form-floating mb-3 xl:w-96 flex">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select a date"
              />
              <label for="floatingInput" className="text-gray-700">
                Select a date
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="xl:w-96">
              <div className="input-group relative flex flex-wrap items-stretch w-full">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                ></input>
                <button
                  className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 flex flex-wrap justify-center items-center mt-4">
          <div className="mx-4 px-12 border-2">
            <img src="/img/heylayer-logo.png" class="h-12"></img>
          </div>

          <div className="custom-txt-title mx-4 px-12 border-2">Nike</div>

          <div className="mx-4 px-12 ">
            <p className="custom-txt-title text-sm">Wallet Address:</p>
            <p className="custom-txt-normal text-sm">
              SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
            </p>
          </div>

          <div className="mx-4 px-12 ">
            <i class="fa fa-chevron-up fa-lg"></i>
          </div>
        </div>

        <div className="border-2 flex flex-wrap">
          <button class="bg-black flex flex-wrap mx-4 hover:bg-blue-700 text-white font-bold py-1 px-12 border-2 rounded-lg custom-txt-title text-lg custom-bg-lightblue justify-center">
            <div>Basic Information</div>
          </button>

          <button class="bg-white  flex flex-wrap mx-4 hover:bg-blue-700 text-black font-bold py-1 px-12 border-2 rounded-lg custom-txt-title text-lg custom-bg-lightblue justify-center">
            <div>Documents Submitted</div>
          </button>
        </div>

        <div className="border-t">
          {/* <hr className="w-full border-gray-300 border-4"></hr> */}
        </div>

        <div className="border-2 pr-12">
          <div className="flex flex-wrap border-2">
            <div className="border-2 mx-4">
              <p className="mt-4">
                <span className="mr-1 custom-txt-normal-mitr">
                  Registered Name:
                </span>
                Nike
              </p>

              <p className="mt-4">
                <span className="mr-1 custom-txt-normal-mitr">
                  Comapny started on:
                </span>
                23 March 1990
              </p>

              <p className="mt-4">
                <span className="mr-1 custom-txt-normal-mitr">LLC Number:</span>
                87264 12089
              </p>

              <p className="mt-4">
                <span className="mr-1 custom-txt-normal-mitr">
                  Any registered trademark:
                </span>
                223 190
              </p>
            </div>

            <div className="border-4 border-dashed border-blueGray-600 ml-auto mr-8 p-16">
              <img src="/img/heylayer-logo.png" class="h-12 "></img>
            </div>
          </div>

          <div className="flex flex-wrap border-2">
            <div className="ml-auto border-2 flex">

            <button class="custom-bg-red flex ml-auto hover:bg-blue-700 mb-4 text-white w-2/12 font-bold  px-12 rounded justify-center">
            <div>Decline</div>
            </button>

            <button class="custom-bg-red flex mx-4 mr-8 ml-auto  hover:bg-blue-700 mb-4 text-white w-2/12 font-bold px-12 rounded justify-center">
              <div>Accept</div>
            </button>

            </div>
          </div>

        </div>

        <div className="border-2 flex flex-wrap justify-center items-center mt-4 mb-6">
          <div className="mx-4 px-12 border-2">
            <img src="/img/heylayer-logo.png" class="h-12"></img>
          </div>

          <div className="custom-txt-title mx-4 px-12 border-2">Nike</div>

          <div className="mx-4 px-12 ">
            <p className="custom-txt-title text-sm">Wallet Address:</p>
            <p className="custom-txt-normal text-sm">
              SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
            </p>
          </div>

          <div className="mx-4 px-12 ">
            <i class="fa fa-chevron-down fa-lg"></i>
          </div>
        </div>

        <div className="border-2 flex flex-wrap justify-center items-center mt-4 mb-6">
          <div className="mx-4 px-12 border-2">
            <img src="/img/heylayer-logo.png" class="h-12"></img>
          </div>

          <div className="custom-txt-title mx-4 px-12 border-2">Nike</div>

          <div className="mx-4 px-12 ">
            <p className="custom-txt-title text-sm">Wallet Address:</p>
            <p className="custom-txt-normal text-sm">
              SP3DQ1EKJ9AD8FBHY5VP1CZ8Y608YJKVKT37E82B0
            </p>
          </div>

          <div className="mx-4 px-12 ">
            <i class="fa fa-chevron-down fa-lg"></i>
          </div>
        </div>

        <div>
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
  </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">1</span>
        to
        <span class="font-medium">10</span>
        of
        <span class="font-medium">97</span>
        results
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Previous</span>

          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
        <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Next</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>
        </div>

      </div>
    </>
  );
}

Index.layout = DashboardLayout;
