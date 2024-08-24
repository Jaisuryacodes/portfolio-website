import React from "react";
import git from "../assets/icons8-github.svg";
import linkedIn from "../assets/linkedin.png";
const Header = () => {
  return (
    <div className=" bg-[#9CA986]  w-full p-2 md:p-3 flex flex-row  md:flex align-middle justify-around items-center  gap-10 md:gap-3">
      <h1 className="   text-[#fefefe] hover:text-white text-[18px] md:text-xl  ">
        𝓙𝓪𝓲𝓼𝓾𝓻𝔂𝓪 𝓢
      </h1>
      <div className="  font-bold flex align-middle gap-3 md:gap-6 text-[12px] md:text-xl  py-[1px] px-3 ">
        <div className=" hidden md:contents ">
          <a
            href="#home"
            className="hover:underline cursor-pointer underline-offset-4"
          >
            Home
          </a>
          <a
            href="#Skills"
            className="hover:underline cursor-pointer underline-offset-4"
          >
            Skills
          </a>
          <a
            href="https://github.com/Jaisuryacodes"
            className="hover:underline cursor-pointer underline-offset-4"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:underline cursor-pointer underline-offset-4 "
          >
            Contact
          </a>
        </div>
        <a href="https://github.com/Jaisuryacodes">
          <img src={git} className=" bg-[#f6f6f7] rounded w-5 md:w-8 " />
        </a>
        <a href="https://www.linkedin.com/in/jaisuryas">
          <img
            src={linkedIn}
            className=" bg-[#ffffff] p-1 rounded w-5 md:w-8 "
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
