import React from "react";
import Sidebar from "./component/sidebar";
import AdminNav from "./component/user-nav";
import { Helmet } from "react-helmet";
import UserNav from "./component/user-nav";

const GeneratedTickets = () => {

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Blog Page. Manage, edit, and publish Generated Tickets related to school management, updates, and news. Easily manage content within the admin panel of Capobrain School Management System."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Blog, Blog Management Dashboard, Admin Panel Blog Page, School Management System Blog, Manage Generated Tickets for School Software, Blog Management for Schools"
        />
        <meta name="robots" content="index, follow" />
        <title>Blog Management - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Blog Management - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Manage and edit Generated Tickets related to Capobrain School Management System. From school updates to informative articles, manage all content in the admin panel with ease."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_ADMIN_PANEL_BLOG_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Blog Management - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Access the blog management section of Capobrain's Admin Panel. Easily manage, edit, and publish school-related Generated Tickets and updates from the admin dashboard."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <UserNav />
        <Sidebar />
        <div className="container mx-auto my-10 h-full ml-14 mt-20 mb-10 md:ml-64 ">
          <h1 className="text-xl font-bold text-slate-600 mb-5 ml-8 my-4">
            Tickets
          </h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ticket ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Severity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"></span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default GeneratedTickets;
