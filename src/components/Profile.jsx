import React from 'react'
import MyPic from "../assets/MyProfile.jpg";
const Profile = () => {
  return (
    <div className="  px-[22px] md:px-[64px]   items-center  align-middle ">
      <div className="  flex  justify-around      ">
        <div className="flex flex-col  ">
          <p className=" font-bold text-[16px] md:text-4xl"> Hi 👋 ,</p>

          <h1 className=" font-bold text-[16px] md:text-4xl"> My name is</h1>

          <h1 className=" font-bold ml-3 text-[18px] md:text-6xl  p-0 md:p-3 text-[#7c3aed] cursor-pointer  hover:text-[#9c41dc]">
            {" "}
            JAISURYA S
          </h1>
          <h1 className=" font-bold text-[16px] md:text-4xl flex justify-center align-middle items-center   ">
            {" "}
            Software Developer.
            <p className=" animate-bounce  text-[#7c3aed] text-[22px] md:text-4xl mt-8  w-full md:w-2">
              .
            </p>
          </h1>
          <div className="mt-1 md:mt-5">
            <a
              href="https://drive.google.com/file/d/166l25GHj9-7xgLL-EmW6FAmDN8i0C0yH/view"
              className="bg-[#7c3aed] w-fit p-1 rounded-md text-[16px] md:text-3xl cursor-pointer  transform-gpu hover:text-[#7c3aed]  hover:bg-white "
            >
              𝙍𝙚𝙨𝙪𝙢𝙚.
            </a>
          </div>
        </div>

        <div className="cursor-pointer flex justify-center align-middle items-center">
          <img
            className="rounded-[50%] h-[130px] md:h-[220px]  w-[120px]  md:w-[210px]  border-[#7c3aed] border-[4px] hover:border-[#7f36b3] "
            src={MyPic}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile
