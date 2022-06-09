import React from "react";
import habib from "../assets/habib.bg.png";
import Typical from "react-typical";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsCloudDownloadFill } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0A192F] py-24">
      <div className="max-w-screen-lg mx-auto flex flex-col md:gap-12   items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full box-border w-[55%]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#8892B0]">
            I'm Habibur Rahman
          </h2>
          <h2 className="text-xl sm:text-5xl font-bold text-[#CCD6F6]">
            <span>
              <Typical
                loop={Infinity}
                steps={[
                  "Ethusiastic Dev",
                  1000,
                  "Full Stack Dev",
                  1000,
                  "MERN Stack Dev",
                  1000,
                  "Cross Platform Dev",
                  1000,
                ]}
              />
            </span>
          </h2>

          <p className="text-gray-500 py-5 max-w-md">
            Full stack web developer with background knowledge of MERN stacks
            with redux, along with a knack of building applications with utmost
            efficiency. Strong professional with a BSC willing to be an asset
            for an organization.{" "}
          </p>
          <div className="md:flex  gap-6">
            <button className="group text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-[#5BE7C9] cursor-pointer">
              Protfolio{" "}
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <AiOutlineCaretRight />
              </span>
            </button>
            <a
              href="/resume.pdf"
              download={true}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-[#5BE7C9] border-2 cursor-pointer"
            >
              Resume{" "}
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <BsCloudDownloadFill />
              </span>
            </a>
          </div>
        </div>

        <div className="ml-4 my-16 w-[45%] border-2 border-orange-400  bg-[#EFEDEF] relative  group">
          <img
            className="rounded-2xl mx-auto w-2/3 md:full relative z-20"
            src={habib}
            alt="my profile"
          />
          <div className="w-full h-full border-2 border-[#5BE7C9] absolute top-6 left-6 z-0 group-hover:top-0 group-hover:left-0 duration-300"></div>
          <div className="w-full h-full border-2 border-[#5BE7C9] absolute bottom-6 right-6 z-0 group-hover:bottom-0 group-hover:right-0 duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
