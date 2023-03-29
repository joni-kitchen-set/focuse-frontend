import React from "react";
import { FaCalendarAlt, FaPencilAlt, Fa } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <ul className="flex gap-8 justify-center items-center text-white  ">
        <li className="text-2xl">Focuse</li>
        <li>
          <button className="text-lg px-4 py-2 bg-white bg-opacity-25 rounded-full flex items-center gap-2">
            <FaCalendarAlt />
            Report
          </button>
        </li>
        <li>
          <button className="text-lg px-4 py-2 bg-white bg-opacity-25 rounded-full flex items-center gap-2">
            <FaPencilAlt />
            Summarize
          </button>
        </li>
        <li>
          <button className="text-lg px-4 py-2 bg-white bg-opacity-25 rounded-full flex items-center gap-2">
            <GoSettings />
            Setting
          </button>
        </li>
        <li>
          <button className="text-lg px-4 py-2 bg-white bg-opacity-25 rounded-full flex items-center gap-2">
            <FiLogIn />
            Login
          </button>
        </li>
      </ul>
    </>
  );
};

export default Header;
