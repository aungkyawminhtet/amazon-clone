import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <div className="px-3 space-x-5 bg-amazon_blue-light flex flex-grow md:flex-grow-0 py-2 items-center justify-between">
        <div>
          <h1 className=" text-white text-2xl font-bold">Logo</h1>
        </div>
        <div className="hidden md:flex lg:flex flex-grow items-center bg-yellow-400 hover:bg-yellow-500 rounded-md flex-shrink overflow-auto">
          <input type="text" className="p-1 w-full" />
          <FaSearch className="w-12" />
        </div>
        <div className="flex space-x-4 pe-5">
          <div className="link">
            <h1>Hello akmh</h1>
            <h1>Account & lists</h1>
          </div>
          <div className="link">
            <h1>Returns</h1>
            <h1>& Orders</h1>
          </div>
          <div className="flex relative items-center">
            <span className=" w-5 h-5 rounded-full bg-ak-col items-center flex justify-center top-1 absolute left-4">0</span>
            <FaCartShopping />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 bg-amazon_blue-dark p-2 ps-3">
        <FaBars />
        <h1 className="aa">ALL</h1>
        <h1 className="aa">Prime Video</h1>
        <h1 className="aa">Account Business</h1>
        <h1 className="aa hidden md:inline-block">Today's Deels</h1>
        <h1 className="aa hidden md:inline-block">Electronic</h1>
        <h1 className="aa hidden md:inline-block">Food & Grocery</h1>
        <h1 className="hidden md:inline-block aa">Prime</h1>
        <h1 className="hidden md:inline-block aa">Buy Again</h1>
        <h1 className="hidden md:inline-block aa">Shopper</h1>
        <h1 className="hidden md:inline-block aa">Toolkit</h1>
        <h1 className="hidden md:inline-block aa">Health & Care</h1>
      </div>
    </nav>
  );
};

export default Header;
