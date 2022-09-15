import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { RiHomeLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Dashboard <AiFillCaretRight />
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-full bg-teal-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div className="flex items-center justify-start mx-auto text-xl gap-2 py-2">
            <p>Dashboard</p>
            <RiHomeLine className="text-xl" />
          </div>
          <li>
            <Link to="/">ReChart</Link>
          </li>
          <li>
            <Link to="highChart">HighChart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
