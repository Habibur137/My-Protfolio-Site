import React from "react";
import project from "../assets/carpento-1.png";
import sunrise from "../assets/sunrise-1.png";
import travel from "../assets/travel-1.png";
import { AiFillGithub } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";

const Projects = () => {
  return (
    <div name="project" className=" md:px-36 md:pb-20 bg-[#0A192F]">
      <div className="md:flex items-center gap-12 mb-16">
        <h1 className="text-[#CCD6F6] text-3xl font-bold">
          Some Things I’ve Built
        </h1>
        <div className="h-1 w-96 bg-[#CCD6F6]"></div>
      </div>
      <div className="md:flex items-center">
        <a
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:w-[55%] h-[340px] relative group"
          href="https://carpento-demo.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full h-full">
            <img className="w-full h-full" src={project} alt="" />
            <div className="w-full h-full  bg-[rgba(19,48,64,0.8)] absolute top-0 left-0  group-hover:hidden duration-300"></div>
          </div>
        </a>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:text-right md:w-[45%]"
        >
          <p className="text-[#5BE7C9] font-medium">Featured Project</p>
          <h3 className="text-[#CCD6F6] font-semibold text-2xl mt-3 mb-6">
            Menufacture Website
          </h3>
          <div className="bg-[#112240] text-[#919DBB] p-6 font-medium mb-6 md:relative md:w-[550px] md:right-16 rounded">
            Delivered a Restful web-based API using Express JS and Mongo DB that
            allows users to register, login, and perform CRUD operations. 
            Implemented JSON web Token authentication for security and added
            restricted middleware to prevent access to unauthorized endpoints.
          </div>
          <div className="text-[#515F78]">
            <span className="mr-2">Tailwind CSS</span>
            <span className="mr-2">React JS</span>
            <span className="mr-2">Express JS</span>
            <span className="mr-2">Mongo DB</span>
            <span className="">React Query</span>
          </div>
          <div className="flex justify-end gap-x-4 mt-3">
            <a
              href="https://github.com/Habibur137/menufacture-website"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white text-xl " title="Clint Site Repo:">
                <AiFillGithub />
              </span>
            </a>
            <a
              href="https://github.com/Habibur137/menufacture-website-server"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white text-xl " title="Server Site Repo:">
                <AiFillGithub />
              </span>
            </a>
            <a
              href="https://carpento-demo.web.app/"
              target="_blank"
              rel="noreferrer"
              title="Live Site"
            >
              <span className="text-white text-xl ">
                <GiEarthAmerica />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* two =========================================================================================== */}
      <div className="flex flex-col-reverse md:flex md:items-center md:flex-row  my-16 md:my-40">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-left md:w-[45%]"
        >
          <p className="text-[#5BE7C9] font-medium">Featured Project</p>
          <h3 className="text-[#CCD6F6] font-semibold text-2xl mt-3 mb-6">
            Warehouse Managment System
          </h3>
          <div className="bg-[#112240] text-[#919DBB] p-6 font-medium mb-6 md:w-[550px] relative z-20 rounded">
            Developed Back-End by using Express and Mongo DB, Used firebase for
            registration and login.  Implemented JSON web Token authentication
            for security and added restricted middleware to prevent access to
            unauthorized endpoints.
          </div>
          <div className="text-[#515F78]">
            <span className="">Bootstrap</span>
            <span className="ml-2">React JS</span>
            <span className="ml-2">Express Js</span>
            <span className="ml-2">Mongo DB</span>
            <span className="ml-2">Axios</span>
            <span>Firebase</span>
          </div>
          <div className="flex  gap-x-4 mt-3">
            <a
              href="https://github.com/Habibur137/warehouse-website"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white text-xl " title="Clint Site Repo:">
                <AiFillGithub />
              </span>
            </a>
            <a
              href="https://github.com/Habibur137/warehouse-website-server"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white text-xl " title="Server Site Repo:">
                <AiFillGithub />
              </span>
            </a>
            <a
              href="https://sunrise-motors.web.app/"
              target="_blank"
              rel="noreferrer"
              title="Live Site"
            >
              <span className="text-white text-xl ">
                <GiEarthAmerica />
              </span>
            </a>
          </div>
        </div>
        <a
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:w-[55%] h-[340px] relative group"
          href="https://sunrise-motors.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full h-full">
            <img className="w-full h-full" src={sunrise} alt="" />
            <div className="w-full h-full  bg-[rgba(100,255,219,0.27)] absolute top-0 left-0  group-hover:hidden duration-300"></div>
          </div>
        </a>
      </div>

      {/* third ============================================================================================== */}
      <div className="md:flex items-center">
        <a
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:w-[55%] h-[340px] relative group"
          href="https://travell-guide.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full h-full">
            <img className="w-full h-full" src={travel} alt="" />
            <div className="w-full h-full  bg-[rgba(22,53,69,0.75)] absolute top-0 left-0  group-hover:hidden duration-300"></div>
          </div>
        </a>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:text-right md:w-[45%]"
        >
          <p className="text-[#5BE7C9] font-medium">Featured Project</p>
          <h3 className="text-[#CCD6F6] font-semibold text-2xl mt-3 mb-6">
            Travel Guide Website
          </h3>
          <div className="bg-[#112240] text-[#919DBB] p-6 font-medium mb-6 relative md:w-[550px] md:right-16 rounded">
            Built, coded, and designed a front-end React app that provides
            tourist support. A user can book a date or cancel it. 
            React-Firebase-Hooks used for authentication.  Structured the site
            using React functional components and also Used Axios to GET data
            from third-party API endpoints
          </div>
          <div className="text-[#515F78]">
            <span className="">React JS</span>
            <span className="mr-2">Express Js</span>
            <span className="mr-2">Mongo DB</span>
            <span className="mr-2">Axios</span>
            <span>Firebase</span>
          </div>
          <div className="flex justify-end gap-x-4 mt-3">
            <a
              href="https://github.com/Habibur137/travel-guide"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white text-xl " title="Clint Site Repo:">
                <AiFillGithub />
              </span>
            </a>

            <a
              href="https://travell-guide.web.app/"
              target="_blank"
              rel="noreferrer"
              title="Live Site"
            >
              <span className="text-white text-xl ">
                <GiEarthAmerica />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
