import React from 'react'
import git from "../assets/icons8-github.svg";
import linkedIn from "../assets/linkedin.png";
const Footer = () => {
  return (
    <>
      <div className=" flex relative  flex-col  gap-2  justify-center align-middle items-center md:justify-around ">
        <div className=" flex justify-center align-middle items-center gap-2  md:p-4">
          <p className=" cursor-pointer underline flex justify-center align-middle items-center gap-2 text-[16px]    ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            jaisuryasjv@gmail.com
          </p>
          <p className=" text-[16px]  cursor-pointer underline flex   justify-center align-middle items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            +91 9952847359
          </p>
        </div>
        <div className=" flex  gap-8 ">
          <a href="https://github.com/Jaisuryacodes">
            <img src={git} className=" bg-[#f6f6f7] rounded w-5 md:w-8 " />
          </a>
          <a href="https://www.linkedin.com/in/jaisuryas">
            <img
              src={linkedIn}
              className=" bg-[#ffffff] rounded w-5 md:w-8 p-1"
            />
          </a>
        </div>
        <a
          href="#home"
          className=" text-[#C9DABF]  text-[18px] absolute right-[-15px] md:right-[-85px] top-[-80px] md:top-[-120px] md:text-2xl p-2 bg-[#5F6F65] rounded-md  w-[40px] h-fit font-extrabold flex justify-center align-middle items-center  hover:underline cursor-pointer underline-offset-4 "
        >
          ⬆
        </a>
      </div>
    </>
  );
}

export default Footer
