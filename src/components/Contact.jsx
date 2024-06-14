import React from 'react'

const Contact = () => {
  return (
    <div>
      <form className="bg-white text-white p-10" action="">
        <h3 className="bg-[#3ba7cb] w-fit">name</h3>
        <input className="bg-[#f73333]" type="text" />
        <h3 className="bg-[#3ba7cb] w-fit">Email</h3>
        <input className="bg-[#f73333]" type="email" />
        <h3 className="bg-[#3ba7cb] w-fit">Subject</h3>
        <input className="bg-[#f73333]" type="text" />
        <h3 className="bg-[#3ba7cb] w-fit">Msg</h3>
        <input className="bg-[#f73333]" type="text" />
      </form>
    </div>
  );
}

export default Contact
