/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import DashboardLayout from "layouts/Dashboard.js";

// Landing Page

export default function Index() {
  return (
    <>

      <section className="mt-48 pb-40">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="custom-txt-title text-4xl">
              Edit Profile
            </h2>
          </div>
        </div>
      </section>

    </>
  );
}

Index.layout = DashboardLayout;