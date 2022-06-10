import React from "react";
import travel from "../assets/projects/travel-device.png";
import sunrise from "../assets/projects/sunrise-device.png";
import carpento from "../assets/projects/carpento-device-1.png";
import a from "../assets/projects/sunrise-device-2.png";
import b from "../assets/projects/sunrise-device-3.png";
import c from "../assets/projects/carpento-device-2.png";

const Protfolio = () => {
  return (
    <div className="px-4 py-20">
      <p className="text-4xl text-white mb-12 md:pl-16 font-bold">
        Protfolio
        <div className="  border-b-4 border-cyan-500 h-1 w-36"></div>
      </p>

      <div name="protfolio">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-16">
          <img
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={travel}
            alt=""
          />
          <img
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={sunrise}
            alt=""
          />
          <img
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={carpento}
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={a}
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={b}
            alt=""
          />
          <img
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={c}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
