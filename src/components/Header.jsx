import React from "react";
import git from "../assets/icons8-github.svg";
import linkedIn from "../assets/linkedin.png";
const Header = () => {
  return (
    <div className="bg-[#222222]  text-white flex justify-evenly align-middle items-center  w-full">
      <h1 className=" bg-[#222222] text-[#7c3aed] text-xl">𝓙𝓪𝓲𝓼𝓾𝓻𝔂𝓪 𝓢</h1>
      <div className=" bg-[#222222] flex align-middle gap-6 text-xl  py-[16px] px-3">
        <a
          href="#home"
          class="hover:underline cursor-pointer underline-offset-4"
        >
          Home
        </a>
        <a
          href="#Skills"
          class="hover:underline cursor-pointer underline-offset-4"
        >
          Skills
        </a>
        <a
          href="#projects"
          class="hover:underline cursor-pointer underline-offset-4"
        >
          Projects
        </a>

        <a
          href="#contact"
          class="hover:underline cursor-pointer underline-offset-4 "
        >
          Contact
        </a>
      </div>
      <div className=" flex justify-center align-middle items-center gap-5 ">
        <a href="https://github.com/Jaisuryacodes">
          <img src={git} className=" bg-[#f6f6f7] rounded " />
        </a>
        <a href="https://www.linkedin.com/in/jaisuryas">
          <img src={linkedIn} className=" bg-[#ffffff] rounded w-8 " />
        </a>
      </div>
    </div>
  );
};

export default Header;
