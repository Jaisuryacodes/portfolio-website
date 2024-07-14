import React from 'react'

const Contact = () => {
  return (
    <div className="" >
      <div className="flex flex-col justify-center align-middle items-center font-normal gap-2 ">
        <h3 className="text-[#7c3aed] font-semibold text-3xl ">Contact Me </h3>
        <form
          className="bg-[#222222] text-white p-10 rounded-md flex flex-col gap-4  "
          action=""
        >
          <div className=" flex bg-transparent gap-4">
            <input
              className="bg-transparent  rounded-sm p-2   border-[1px] border-white"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-transparent rounded-sm p-2   border-[1px] border-white "
              type="text"
              placeholder="Email"
            />
          </div>

          <input
            className="bg-transparent rounded-sm p-2  border-[1px] border-white  "
            type="text"
            placeholder="subject"
          />

          <textarea
            className="bg-transparent rounded-lg p-2  h-[100px]   border-[1px] border-white "
            name=""
            placeholder="Text"
          ></textarea>

          <div className="flex justify-center">
            <input
              className="bg-slate-100 w-fit text-black p-3 rounded-md font-bold cursor-pointer  "
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact
