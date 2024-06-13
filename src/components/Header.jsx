import React from "react";

const Header = () => {
  return (
    <div className="bg-[#222222]  text-white flex justify-evenly">
      <h1 className=" bg-[#222222] text-[32px]">Js</h1>
      <div className=" bg-[#222222] flex align-middle gap-4  py-[16px]">
        <h3 className="bg-[#222222]">Home</h3>
        <h3 className="bg-[#222222]">Skills</h3>
        <h3 className="bg-[#222222]">Project</h3>
        <h3 className="bg-[#222222]">Education</h3>
        <h3 className="bg-[#222222]">Contact</h3>
      </div>
    </div>
  );
};

export default Header;
