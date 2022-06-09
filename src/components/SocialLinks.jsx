import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFilePersonFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linked In <FaLinkedin size={20} />
        </>
      ),
      href: "www.linkedin.com/in/habibur-rahman-283288241",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Facebook <FaFacebook size={20} />
        </>
      ),
      href: "www.linkedin.com/in/habibur-rahman-283288241",
    },

    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/Habibur137",
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:habibur.rahman.r17@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFilePersonFill size={20} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="md:flex lg:flex flex-col top-[34%] left-0 fixed hidden">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-36 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#8892B0] " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
