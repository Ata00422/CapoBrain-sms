import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../data/usermanualData.json";
import Navigation from "../Components/Navigation";

const UserManualData = () => {
  const { id } = useParams();
  const [manualData, setManualData] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(data.sidemenu); 
  }, []);
  useEffect(() => {
    const selectedData = data.sidemenu.find((item) => item.id === id);
    setManualData(selectedData);
  }, [id]);

  if (!manualData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{manualData.meta.title}</title>
        <meta name="description" content={manualData.meta.description} />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1
              className="text-4xl lg:text-6xl font-[1000] text-white"
              style={{ fontFamily: "Grotesk-Medium, Verdana, sans-serif" }}
            >
              Explore Our Software User Manual
            </h1>
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
      <div className="cb-container my-4">
        <h2 className="max-w-5xl text-center mb-6 font-sans pt-16 pb-5  text-3xl font-bold leading-none tracking-tight text-purple-800 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-18 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-12 sm:block animate-pulse"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative"></span>
          </span>{" "}
          Capobrain <span> User</span> Guide
        </h2>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          Discover how to unlock the full potential of{" "}
          <strong>CapoBrain’s School Management Software</strong> with our
          detailed <strong>software user manual</strong>. This guide provides
          step-by-step instructions on using CapoBrain’s comprehensive features,
          making it the ultimate{" "}
          <strong>online education management system</strong>.
        </p>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          The <strong>CapoBrain User Guide</strong> covers everything from
          course creation, grade tracking, and{" "}
          <strong>attendance management</strong> to real-time collaboration
          between students, teachers, and administrators. Learn how to
          efficiently manage resources, access detailed analytics, and implement
          secure access controls through our{" "}
          <strong>school management platform</strong>.
        </p>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          Whether you're an educator, student, or school administrator, this
          manual ensures you make the most of CapoBrain’s features.
          Revolutionize your experience with{" "}
          <strong>CapoBrain’s ERP software for schools</strong>, empowering
          modern education with innovative, user-friendly tools. Explore all
          functionalities by reading our complete guide today.
        </p>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          For further resources on online learning and skill development, visit{" "}
          <a
            href="https://mentorsacademia.com/"
            style={{ textDecoration: "none" }}
            target="blank"
          >
            Mentors Academia
          </a>
          , our partner platform for modern education solutions.
        </p>
      </div>
      <div className="w-full mx-auto mb-3 max-w-[1500px]">
        <div className="flex flex-col md:flex-row mt-3">
          <div className="lg:w-full mx-4 lg:mx-0   md:max-w-[500px] flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-purple-900 to-purple-600 px-2 py-4 gap-10 rounded-2xl">
            <div className="pb-3 pt-2 w-full">
              <Navigation menu={menu} />
            </div>
          </div>

          <div className="md:max-w-[700px] lg:max-w-[1000px] pl-4 md:w-3/4 mt-3 mx-8 mb-5 text-justify">
          
            <h2 className="text-2xl font-semibold mb-6 text-purple-800">
              {manualData.content.heading}
            </h2>
            <p className="mb-3">
              {manualData.content.description}
            </p>
            <ul className="list-disc list-inside mt-4 text-left">
            {manualData.content.details.map((benefit, index) => (
              <li key={index} className="mb-2">
                {benefit}
              </li>
            ))}
          </ul>
            <div>
              <img
                src={manualData.content.image.src}
                alt={manualData.content.image.alt}
                className="max-w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManualData;
