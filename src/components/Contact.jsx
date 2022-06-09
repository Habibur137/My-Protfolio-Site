import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#0A192F] p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit The Form Below To Get In Touch With Me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="emial"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              rows="10"
              placeholder="Message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            ></textarea>
            <button className="text-white px-6 py-3 my-8 bg-gradient-to-b from-cyan-500 to-blue-500 mx-auto flex  items-center rounded-md hover:scale-110 duration-300 cursor-pointer">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
