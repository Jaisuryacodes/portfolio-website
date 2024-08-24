import React from 'react'
import MyPic from "../assets/MyProfile.jpg";
const Profile = () => {
  return (
    <div className="  px-[22px] md:px-[64px]   items-center  align-middle ">
      <div className="  flex  justify-around      ">
        <div className="flex flex-col  ">
          <p className=" font-bold text-[16px] md:text-4xl"> Hi 👋 ,</p>

          <h1 className=" font-bold text-[16px] md:text-4xl"> My name is</h1>

          <h1 className=" font-bold ml-3 text-[18px] md:text-6xl  p-0 md:p-3 text-[#5F6F65] cursor-pointer  hover:text-[#808D7C]">
            {" "}
            JAISURYA S
          </h1>
          <h1 className=" font-bold text-[16px] md:text-4xl flex justify-center align-middle items-center   ">
            {" "}
            Software Developer.
            <p className=" animate-bounce  text-[#5F6F65] text-[22px] md:text-4xl mt-8  w-full md:w-2">
              .
            </p>
          </h1>
          <div className="mt-1 md:mt-5">
            <a
              href="https://drive.google.com/file/d/166l25GHj9-7xgLL-EmW6FAmDN8i0C0yH/view"
              className="bg-[#808D7C] text-white flex justify-center align-middle items-center   w-fit p-1 rounded-md text-[16px] md:text-xl cursor-pointer  transform-gpu   hover:bg-[#5F6F65]"
            >
              𝙍𝙚𝙨𝙪𝙢𝙚{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="cursor-pointer flex justify-center align-middle items-center">
          <img
            className="rounded-[50%] h-[160px] md:h-[320px]  w-[150px]  md:w-[310px]  border-[#808D7C] border-[4px] hover:border-[#5F6F65] "
            src={MyPic}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile
