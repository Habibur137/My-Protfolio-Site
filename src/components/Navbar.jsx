import React, { useState } from "react";
import useLinks from "../routes/useLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [nav, setNav] = useState(false);
  const [links] = useLinks();
  return (
    //   logo here=========================================
    <div className="flex justify-between items-center w-full h-20 text-white bg-[#0A192F] fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-[#ccd6f6]">
          Habibur <span className="text-[#5BE7C9]">Rahman</span>
        </h1>
      </div>
      {/* routes here ============================================= */}
      <ul className="hidden md:flex lg:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-[#ccd6f6] hover:scale-105 hover:text-[#5BE7C9] duration-200"
          >
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* short menu here ================================ */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0A192F] to-gray-800 text-[#ccd6f6]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-[#5BE7C9] duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
