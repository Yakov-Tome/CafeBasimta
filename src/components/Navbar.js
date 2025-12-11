import Image from "next/image";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  return (
    <div className="navbar bg-[#FFE6DE]/97 backdrop-blur-sm shadow-sm text-black font-mono h-25 sticky top-10 z-10 rounded-2xl max-w-xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu3Fill />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
            <a className="text-xl absolute top-2/5 left-3/9 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[#CC7D9A] text-3xl">
                  קפה
                </span>
                <span className="absolute top-6 text-2xl">בסמטה</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
