import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { BsShop, BsGrid, BsFileRichtext } from "react-icons/bs";
import { GiIsland } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

import { sidebarLinks } from "../data";
import { AiOutlineDown } from "react-icons/ai";
function Sidebar() {
  const location = useLocation();

  const [view, setView] = useState({
    homepage: false,
    tours: false,
    visa: false,
    payment: false,
  });

  return (
    <div className="bg-semisoft fixed top-0 left-0 h-[100vh] w-[100%] max-w-[15em] flex flex-col">
      <div className="px-6 py-6 flex items-center gap-[10px]">
        <img
          src={
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonarchive.com%2Ftag%2Fimage&psig=AOvVaw3MHewklTCDIN9z7TujrHgM&ust=1669449330372000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjsssTtyPsCFQAAAAAdAAAAABAN"
          }
          alt=""
          className="w-[27px] min-w-[27px]"
        />
        <h1 className="font-bold text-xl text-center text-darktext">
          Travellers Choice
        </h1>
      </div>
      <div className="flex-1">
        <div>
          <ul>
            {/* dashboard */}
            <li className="">
              <Link to="/">
                <div
                  className={
                    "relative flex items-center gap-[15px] px-6 py-[14px] text-[15px] transition-all  cursor-pointer justify-between " +
                    (location.pathname === "/" || location.pathname === "/"
                      ? "text-lightblue"
                      : "text-darktext hover:text-white")
                  }
                >
                  <span className=" flex items-center space-x-2">
                    <span className="flex items-center">
                      <GiIsland />
                    </span>
                    <span>Dashboard</span>
                  </span>
                  {(location.pathname === "/" || location.pathname === "/") && (
                    <span className="absolute top-0 left-0 h-full bg-lightblue w-[4px] rounded-r"></span>
                  )}
                </div>
              </Link>
            </li>

            {/* homepage */}
            <li className="">
              <div
                className={
                  "relative flex items-center gap-[15px] px-6 py-[14px] text-[15px] transition-all  cursor-pointer justify-between " +
                  (location.pathname === "/homepage" ||
                  location.pathname === "/homepage"
                    ? "text-lightblue"
                    : "text-darktext hover:text-white")
                }
                onClick={() =>
                  setView((prev) => {
                    return { ...prev, homepage: !view.homepage };
                  })
                }
              >
                <span className=" flex items-center space-x-2">
                  <span className="flex items-center">
                    <GiIsland />
                  </span>
                  <span>Homepage</span>
                </span>
                <span className="flex items-center">
                  <AiOutlineDown />
                </span>
                {(location.pathname === "/homepage" ||
                  location.pathname === "/homepage") && (
                  <span className="absolute top-0 left-0 h-full bg-lightblue w-[4px] rounded-r"></span>
                )}
              </div>
              <div
                className={`pl-7  ${
                  view.homepage ? "max-h-[100vh]" : "max-h-0"
                } transition-all duration-500 overflow-hidden`}
              >
                <ul className="space-y-2 text-darktext">
                  <li className="">All Tours</li>
                  <li className="">Add Tours</li>
                  <li className="">Categories</li>
                  <li className="">Countries</li>
                  <li className="">Reviews</li>
                </ul>
              </div>
            </li>

            {/* tours */}
            <li className="">
              <div
                className={
                  "relative flex items-center gap-[15px] px-6 py-[14px] text-[15px] transition-all  cursor-pointer justify-between " +
                  (location.pathname.includes("/tours")
                    ? "text-lightblue"
                    : "text-darktext hover:text-white")
                }
                onClick={() =>
                  setView((prev) => {
                    return { ...prev, tours: !view.tours };
                  })
                }
              >
                <span className=" flex items-center space-x-2">
                  <span className="flex items-center">
                    <GiIsland />
                  </span>
                  <span>Tours</span>
                </span>
                <span className="flex items-center">
                  <AiOutlineDown />
                </span>
                {location.pathname.includes("/tours") && (
                  <span className="absolute top-0 left-0 h-full bg-lightblue w-[4px] rounded-r"></span>
                )}
              </div>
              <div
                className={`pl-7  ${
                  view.tours ? "max-h-[100vh]" : "max-h-0"
                } transition-all duration-500 overflow-hidden`}
              >
                <ul className="space-y-2 text-darktext">
                  <li
                    className={
                      " cursor-pointer " +
                      (location.pathname.includes("/tours/all")
                        ? "text-lightblue"
                        : "text-darktext hover:text-bluetrans")
                    }
                  >
                    <Link to="/tours/all">All Tours</Link>
                  </li>
                  <li
                    className={
                      " cursor-pointer " +
                      (location.pathname.includes("/tours/add")
                        ? "text-lightblue"
                        : "text-darktext hover:text-bluetrans")
                    }
                  >
                    <Link to="/tours/add">Add Tours</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link to="/tours/category">Categories</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link to="/tours/country">Countries</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link to="/tours/review">Reviews</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 py-5">
        <button className="flex items-center justify-center gap-[10px] w-[100%] bg-lightblue py-2 rounded-xl text-white hover:bg-blue">
          <FiLogOut /> Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
