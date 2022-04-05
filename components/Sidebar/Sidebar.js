import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="inline-block p-8 px-8 mr-8 text-right text-sm md:block md:pb-2 custom-txt-title whitespace-nowrap"
            >
                <i
                  className={
                    "fas fa-tv mr-2 text-sm "
                  }
                ></i>{" "}
              Mint it
            </a>
          </Link>
          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="relative inline-block">
              {/* <UserDropdown /> */}
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left md:block md:pb-2 custom-txt-title whitespace-nowrap"
                    >
                      Mint it
                    </a>
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-0 border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                />
              </div>
            </form>

            <hr className="my-4 md:min-w-full" />

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:custom-bg-darkblue"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    Track
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:custom-bg-darkblue"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    View NFTs
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:custom-bg-darkblue"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    Mint NFTs
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:custom-bg-darkblue"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    Verified Manufacturers
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:custom-bg-darkblue"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    Transactions
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:custom-bg-darkblue"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    About
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:custom-bg-darkblue"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-3 font-bold block custom-txt-title "+
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-custom-bg-darkblue hover:text-blueGray-500"
                      : "text-custom-bg-darkblue hover:text-blueGray-500")
                    }
                  >
                    How does it work?
                  </a>
                </Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
