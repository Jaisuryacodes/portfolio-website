import React from 'react'
import Swal from "sweetalert2";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c2aabda2-d0de-4c47-8707-8f9290f169fb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Thank you !",
        text: " Message sent Successfully",
        icon: "success",
      });
      
    }
  };
  return (
    <div className="flex flex-col justify-center align-middle items-center font-normal gap-2 ">
      <h3 className="text-[#7c3aed] font-semibold  text-[22px] md:text-3xl ">
        Contact Me{" "}
      </h3>
      <form
        className="bg-[#222222] text-white p-10 rounded-md flex flex-col gap-4  "
        onSubmit={onSubmit}
      >
        <div className=" flex flex-col md:flex-row bg-transparent gap-4 ">
          <input
            className="bg-transparent  rounded-sm p-2 placeholder:text-white  border-[1px] border-[#7c3aed]"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="bg-transparent rounded-sm p-2 placeholder:text-white  border-[1px] border-[#7c3aed]"
            type="text"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <textarea
          className="bg-transparent rounded-lg p-2  h-[100px] mt-5 placeholder:text-white border-[1px] border-[#7c3aed] "
          name="message"
          placeholder="Text.."
          required
        ></textarea>

        <div className="flex justify-center">
          <input
            className=" hover:bg-[#7c3aed] transform-gpu text-white border-[1px] border-[#7c3aed]  h-fit  text-xl w-fit p-3 rounded-md font-bold cursor-pointer  "
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact
