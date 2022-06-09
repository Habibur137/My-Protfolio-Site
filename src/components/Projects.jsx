import React from "react";
import project from "../assets/chair.png";
import habib from "../assets/habib.jpg";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className=" md:px-36 bg-[#0A192F]">
      <div className="md:flex items-center gap-12 mb-16">
        <h1 className="text-[#CCD6F6] text-3xl font-bold">
          Some Things I’ve Built
        </h1>
        <div className="h-1 w-96 bg-[#CCD6F6]"></div>
      </div>
      <div className="md:flex items-center">
        <a
          className="md:w-[55%] h-[340px] relative group"
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full h-full">
            <img className="w-full h-full" src={project} alt="" />
            <div className="w-full h-full  bg-[rgba(19,48,64,0.8)] absolute top-0 left-0  group-hover:hidden duration-300"></div>
          </div>
        </a>
        <div className="md:text-right md:w-[45%]">
          <p className="text-[#5BE7C9] font-medium">Featured Project</p>
          <h3 className="text-[#CCD6F6] font-semibold text-2xl mt-3 mb-6">
            Halcyon Theme
          </h3>
          <div className="bg-[#112240] text-[#919DBB] p-6 font-medium mb-6 md:relative md:w-[550px] md:right-16 rounded">
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </div>
          <div className="text-[#515F78]">
            <span>React</span>
            <span>Vs Code</span>
            <span>Node js</span>
          </div>
          <div className="md:text-right">
            <span className="text-white text-2xl cursor-pointer p-2 rounded-full">
              <AiFillGithub />
            </span>
          </div>
        </div>
      </div>
      {/* two =========================================================================================== */}
      <div className="flex flex-col-reverse md:flex md:items-center md:flex-row  my-40">
        <div className="text-left md:w-[45%]">
          <p className="text-[#5BE7C9] font-medium">Featured Project</p>
          <h3 className="text-[#CCD6F6] font-semibold text-2xl mt-3 mb-6">
            Halcyon Theme
          </h3>
          <div className="bg-[#112240] text-[#919DBB] p-6 font-medium mb-6 md:w-[550px] relative z-20 rounded">
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </div>
          <div className="text-[#515F78]">
            <span>React</span>
            <span>Vs Code</span>
            <span>Node js</span>
          </div>
        </div>
        <a
          className="md:w-[55%] h-[340px] relative group"
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full h-full">
            <img className="w-full h-full" src={habib} alt="" />
            <div className="w-full h-full  bg-[rgba(100,255,219,0.27)] absolute top-0 left-0  group-hover:hidden duration-300"></div>
          </div>
        </a>
      </div>

      {/* third ============================================================================================== */}
      <div className="md:flex items-center">
        <a
          className="md:w-[55%] h-[340px] relative group"
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full h-full">
            <img className="w-full h-full" src={project} alt="" />
            <div className="w-full h-full  bg-[rgba(22,53,69,0.75)] absolute top-0 left-0  group-hover:hidden duration-300"></div>
          </div>
        </a>
        <div className="md:text-right md:w-[45%]">
          <p className="text-[#5BE7C9] font-medium">Featured Project</p>
          <h3 className="text-[#CCD6F6] font-semibold text-2xl mt-3 mb-6">
            Halcyon Theme
          </h3>
          <div className="bg-[#112240] text-[#919DBB] p-6 font-medium mb-6 relative md:w-[550px] md:right-16 rounded">
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </div>
          <div className="text-[#515F78]">
            <span>React</span>
            <span>Vs Code</span>
            <span>Node js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
