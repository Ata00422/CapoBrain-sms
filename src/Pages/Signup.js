import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Create your Capobrain account to access our powerful School Management System. Sign up today to streamline school administration, manage students, fees, attendance, and more."
        />
        <meta
          name="keywords"
          content="Capobrain Signup, School Management System Signup, School ERP Signup, User Signup, School Software Signup, School Management System Registration, Create Capobrain Account"
        />
        <meta name="robots" content="index, follow" />
        <title>
          User Signup - Capobrain | Create Your School Management Account
        </title>

        <meta
          property="og:title"
          content="User Signup - Capobrain | Create Your School Management Account"
        />
        <meta
          property="og:description"
          content="Sign up for Capobrain and get access to the best School Management System. Manage school operations, student data, and more with our comprehensive School ERP software."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_SIGNUP_PAGE_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="User Signup - Capobrain | Create Your School Management Account"
        />
        <meta
          name="twitter:description"
          content="Create your Capobrain account to streamline school administration. Our School Management System helps you manage students, fees, attendance, and more."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">Sign Up </h1>
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
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 opacity-50 blur-xs to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 sm:min-w-[520px] w-full">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Welcome to CapoBrain</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer input-bar mb-2"
                      id="exampleInput90"
                      placeholder="Enter your Name"
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
                      type="password"
                      className="peer input-bar mb-2"
                      id="exampleInput91"
                      placeholder="Password"
                    />
                    <label className="input-label" for="exampleInput91">
                      Password
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer input-bar mb-2"
                      id="exampleInput91"
                      placeholder="Whatsapp Number"
                    />
                    <label className="input-label" for="exampleInput91">
                      Whatsapp Number
                    </label>
                  </div>
                  <div className="relative py-2">
                    <button className="text-white rounded-md px-6 py-1 btn-anim">
                      Sign up
                    </button>
                  </div>
                  <p className="text-sm text-center text-gray-500 ">
                    Already Have an Account?{" "}
                    <Link
                      to="/userlogin"
                      className="font-medium text-indigo-600 hover:underline"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
