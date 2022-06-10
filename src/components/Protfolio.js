import React from "react";
import travel from "../assets/projects/travel-device.png";
import sunrise from "../assets/projects/sunrise-device.png";
import carpento from "../assets/projects/carpento-device-1.png";
import a from "../assets/projects/sunrise-device-2.png";
import b from "../assets/projects/sunrise-device-3.png";
import c from "../assets/projects/carpento-device-2.png";

const Protfolio = () => {
  return (
    <div>
      <div name="protfolio">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-16">
          <img src={travel} alt="" />
          <img src={sunrise} alt="" />
          <img src={carpento} alt="" />
          <img src={a} alt="" />
          <img src={b} alt="" />
          <img src={c} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
