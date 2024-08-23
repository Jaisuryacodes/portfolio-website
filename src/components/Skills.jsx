import React from 'react'
import Git from "../assets/icons8-git-logo.svg";
import Github from "../assets/icons8-github.svg";
import C from "../assets/icons8-c-programming.svg";
import  Java from "../assets/icons8-java-logo.svg";
import Html from "../assets/icons8-html-logo.svg";
import CSS from "../assets/icons8-css-logo.svg";
import ReactIcon from "../assets/icons8-react-native.svg";
import Tailwinds from "../assets/icons8-tailwind-css.svg";
import Js from "../assets/icons8-javascript.svg";
import netilify from "../assets/image.png";
import Vs from "../assets/icons8-visual-studio-code.svg";
const Skills = () => {
  return (
    <>
      <div className=" flex  flex-col  justify-center align-middle items-center px-[16px]  ">
        <h1 className="font-semibold text-[22px] md:text-3xl">Skills</h1>
        <h2 className="font-semibold text-[16px] md:text-xl text-[#7c3aed]">
          Here are some of my skills on which I have learnt.
        </h2>
      </div>
      <div className="px-[16px]  md:px-32 md:py-6 flex   items-center align-middle justify-around   ">
        <div className=" border-[2px] px-12 md:w-[1000px] border-[#7c3aed] rounded-md flex flex-col md:flex-row backdrop-blur-m justify-around  mt-3 ">
          {/* <div className=" w-[250px] md:w-[800px]  -z-30 md:mt-[120px]  h-[82px] md:h-[52px] bg-white blur-3xl absolute  ml-4 "></div> */}
          <div className=" flex p-2 md:p-5 flex-col items-center align-middle justify-center gap-2 md:gap-6">
            <h1 className="font-bold text-[18px] md:text-2xl">
              Languages / Frameworks
            </h1>
            <div className=" grid grid-cols-3  gap-5">
              <div className=" flex flex-col items-center align-middle justify-center ">
                <img src={C} alt="" />
                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  C
                </h1>
              </div>
              <div className=" flex flex-col items-center align-middle justify-center">
                <img src={Java} alt="" />
                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  Java
                </h1>
              </div>
              <div className=" flex flex-col items-center align-middle justify-center">
                <img src={Js} alt="" />
                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  JavaScript
                </h1>
              </div>
              <div className=" flex flex-col items-center align-middle justify-center">
                <img src={Html} alt="" />

                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  HTML
                </h1>
              </div>
              <div className="  flex flex-col items-center align-middle justify-center">
                <img src={CSS} alt="" />

                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  CSS
                </h1>
              </div>
              <div className=" flex flex-col items-center align-middle justify-center">
                <img src={Tailwinds} alt="" />

                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  Tailwindcss
                </h1>
              </div>
              <div className="  flex flex-col items-center align-middle justify-center">
                <img src={ReactIcon} alt="" />

                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  React
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex flex-col align-middle items-center gap-4 md:gap-6 md:p-5 ">
            <h1 className="font-bold text-[18px] md:text-2xl">Tools</h1>
            <div className="grid grid-cols-3   gap-5">
              <div className="flex flex-col items-center align-middle justify-center ">
                <img src={Git} alt="" />
                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  Git
                </h1>
              </div>
              <div className="flex flex-col items-center align-middle justify-center">
                <img className="text-white h-[50px]" src={Github} alt="" />
                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  Github
                </h1>
              </div>
              <div className="flex flex-col items-center align-middle justify-center">
                <img className="text-white h-[50px]" src={netilify} alt="" />

                <h1 className="text-[16px] md:text-lg flex items-center align-middle justify-center">
                  Netlify
                </h1>
              </div>
              <div className="  flex flex-col items-center align-middle justify-center">
                <img className="text-white h-[50px]" src={Vs} alt="" />

                <h1 className="  text-[16px] md:text-lg flex items-center align-middle justify-center">
                  VS Code
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills
