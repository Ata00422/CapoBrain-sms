import React from "react";
import { Link } from "react-router-dom";
import CapobrainDemo from "../img/capobrain-demo.avif";
import { Helmet } from "react-helmet";
const RequestDemo = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Request a free demo of Capobrain’s School Management System today! Explore the powerful features of our School ERP software, including fee management, attendance tracking, student data, and more. Get a personalized demo tailored to your school's needs."
        />
        <meta
          name="keywords"
          content="Capobrain Request Demo, School Management System Demo, School ERP Demo, Request a Demo, School Software Demo, Free School ERP Demo, School Management System Features, Demo Capobrain School ERP"
        />
        <meta name="robots" content="index, follow" />
        <title>Request Demo - Capobrain | School Management System Demo</title>

        <meta
          property="og:title"
          content="Request Demo - Capobrain | School Management System Demo"
        />
        <meta
          property="og:description"
          content="Request a personalized demo of Capobrain’s School Management System. See how our School ERP software can simplify school administration, student management, fee collection, and more."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_REQUEST_DEMO_PAGE_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Request Demo - Capobrain | School Management System Demo"
        />
        <meta
          name="twitter:description"
          content="Request a demo of Capobrain’s School Management System. Discover the features of our School ERP software for better school administration, including fee management, attendance, and student data."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">Request the Demo </h1>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
      <div
        className="bg-cover bg-center relative bg-fixed"
        style={{ backgroundImage: `url(${CapobrainDemo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="h-screen flex justify-center items-center relative ">
          <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-purple-700 text-center">
                Hang On A Minute!
              </h1>
              <p className="text-center py-3 text-neutral-500">
                You're almost there, just fill in this information to get the
                credentials for the demo.
              </p>
            </div>
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer input-bar mb-2"
                  id="exampleInput90"
                  placeholder="Enter Name"
                />
                <label className="input-label" for="exampleInput90">
                  Name
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="peer input-bar mb-2"
                  id="exampleInput91"
                  placeholder="Email Address"
                />
                <label className="input-label" for="exampleInput91">
                  Email address
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="number"
                  className="peer input-bar mb-2"
                  id="exampleInput92"
                  placeholder="Contact Number"
                />
                <label className="input-label" for="exampleInput92">
                  Contact Number
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer input-bar mb-2"
                  id="exampleInput93"
                  placeholder="School Name"
                />
                <label className="input-label" for="exampleInput93">
                  School Name
                </label>
              </div>
              <div className="relative py-2">
                <button className="text-white rounded-md px-6 py-1 btn-anim">
                  Send Request{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default RequestDemo;
