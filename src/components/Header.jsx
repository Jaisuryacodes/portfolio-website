import React from "react";

const Header = () => {
  return (
    <div className="bg-[#222222]  text-white flex justify-evenly  w-full">
      <h1 className=" bg-[#222222] text-[32px]">Js</h1>
      <div className=" bg-[#222222] flex align-middle gap-4  py-[16px]">
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
          href="#Education"
          class="hover:underline cursor-pointer underline-offset-4"
        >
          Education
        </a>
        <a
          href="#contact"
          class="hover:underline cursor-pointer underline-offset-4 "
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
