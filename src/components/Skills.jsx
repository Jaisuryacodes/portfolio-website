import React from 'react'
import Git from "../assets/icons8-git-logo.svg";
import Github from "../assets/icons8-github.svg";
import C from "../assets/icons8-c-programming.svg";
import  Java from "../assets/icons8-java-logo.svg";
import Html from "../assets/icons8-html-logo.svg";
import CSS from "../assets/icons8-html-logo.svg";

import Tailwinds from "../assets/icons8-react-native.svg";
const Skills = () => {
  return (
    <>
      <div className=" flex flex-col justify-center align-middle items-center">
        <h1 className="font-semibold text-3xl">Skills</h1>
        <h2 className="font-semibold text-xl text-[#7c3aed]">
          Here are some of my skills on which I have learnt.
        </h2>
      </div>
      <div className=" p-32 ">
        <div className="border-[2px] border-emerald-500 rounded-md flex  justify-around">
          <div className="">
            <h1>Languages / Frameworks</h1>
            <div className=" bg-slate-500">
               <img src={C} alt="" />
               <img src={Java} alt="" />
               <img src={Tailwinds} alt="" />
            </div>
          </div>
          <div className=" bg-white     ">
            <h1>Tools</h1>
            <div className="">
              <img src={Git} alt="" />
              <img className="text-white" src={Github} alt="" />
              <img src={Git} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills
