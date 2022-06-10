import React from "react";
import html from "../assets/html.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import next from "../assets/nextjs.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      title: "HTML",
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      src: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "REACT JS",
      src: react,
      style: "shadow-blue-600",
    },
    {
      id: 5,
      title: "TAILWIND CSS",
      src: tailwind,
      style: "shadow-sky-400",
    },
    {
      id: 6,
      title: "NEXT JS",
      src: next,
      style: "shadow-white",
    },
    {
      id: 7,
      title: "GITHUB",
      src: github,
      style: "shadow-gray-500",
    },
    {
      id: 8,
      title: "NODE JS",
      src: node,
      style: "shadow-green-500",
    },
  ];
  return (
    <div name="experience" className="md:py-28 bg-[#0A192F] w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold">
            Experience
            <div className="  border-b-4 border-cyan-500 h-1 w-36"></div>
          </p>
          <p className="py-6">There are the technologies I've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
          {tech.map(({ id, src, title, style }) => (
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              key={id}
              className={`bg-[#112240] shadow-md  group py-2 rounded-lg ${style}`}
            >
              <img
                className="w-20 mx-auto group-hover:scale-125 duration-300"
                src={src}
                alt=""
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
