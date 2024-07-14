import React from 'react'
import MyPic from "../assets/MyProfile.jpg";
const Profile = () => {
  return (
    <div className=" px-[64px] flex flex-col justify-around align-middle ">
      <div className="  flex justify-around ">
        <div className="flex flex-col ">
          <p className=" font-bold text-4xl"> Hi 👋 ,</p>

          <h1 className=" font-bold text-4xl"> My name is</h1>

          <h1 className=" font-bold text-6xl p-3 text-[#7c3aed]">
            {" "}
            JAISURYA S
          </h1>
          <h1 className=" font-bold text-4xl flex ">
            {" "}
            Software Developer.
            <p className=" animate-bounce  -z-20 text-[#7c3aed] text-4xl">.</p>
          </h1>
          <div className="mt-5">
            <a
              href="https://drive.google.com/file/d/166l25GHj9-7xgLL-EmW6FAmDN8i0C0yH/view"
              className="bg-[#7c3aed] w-fit p-1 rounded-md text-3xl cursor-pointer "
            >
              Resume.
            </a>
          </div>
        </div>

        <div className="cursor-pointer">
          <img
            className="rounded-[50%]  h-[220px] border-[#7c3aed] border-[4px]"
            src={MyPic}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile
