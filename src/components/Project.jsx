import React from 'react'

const Project = () => {
  return (
    <div className="flex-col  flex  gap-2 justify-center align-middle items-center p-3 bg-[#9CA986]     rounded-md">
      <h1 className="font-bold  text-[22px] p-2">Project</h1>
      <div className="  flex   flex-col  md:flex-row  gap-4">
        <div className=" border-[2px] border-[#5F6F65] p-2 flex  flex-col gap-3  ">
          <h1 className="bg-[#5F6F65] p-2  text-white font-bold">
            {" "}
            Guest-room-booking-application
          </h1>
          <a
            className="underline"
            href=" https://github.com/Jaisuryacodes/Guest-Room-Booking-Application"
          >
            {" "}
            Duration : 05/2024 - 05/2024 🔗
          </a>
          <p className="w-[300px] bg-[#7]  ">
            Types of User Management : Owner, customer.
            <br />
            Users can Create an account with using email id and mobile number.
            <br />
            Owners :Create/edit/delete rooms, their details and Upload photos.
            Customers: They can view all available rooms for booking and they
            can view details of each room. They can also choose the dates and
            book.
            <br />
            Team Size: 1 | Role: Individual Contributor
          </p>
        </div>
        <div className=" border-[2px] border-[#5F6F65] p-2 flex  flex-col gap-3 ">
          <h1 className="bg-[#5F6F65] p-2 text-white font-bold">
            DOFY-E-COMMERCE-WEBSITE
          </h1>
          <a className="underline" href="#">
            Duration : 02/2024 - 03/2024 🔗
          </a>
          <p className="w-[300px] bg-[#7]   ">
            Translated Figma designs into functional code, achieving a
            pixel-perfect and responsive design. for mobile devices. <br />
            Implemented smooth transitions and animations, enhancing user
            experience. Collaborated in a team of 4, ensuring seamless
            integration of frontend components.
            <br /> Team Size: 4 | Role: Team Member
          </p>
        </div>
        <div className=" border-[2px] border-[#5F6F65] p-2 flex  flex-col gap-3 ">
          <h1 className="bg-[#5F6F65] p-2  text-white font-bold">
            {" "}
            Automatic-ticket-distributor
          </h1>
          <a
            className="underline"
            href=" https://github.com/Jaisuryacodes/AUTOMATIC-TICKET-DISTRIBUTER.git"
          >
            Duration : 01/2022 - 05/2022 🔗
          </a>
          <p className="w-[300px] bg-[#7]   ">
            Developed and implemented an automated Ticket Distributor system,
            eliminating the need for physical currency.
            <br />
            Streamlined ticketing processes and reduced transaction time by 50%
            <br />
            Team Size: 4 | Role: Team Leader
          </p>
        </div>

        {/* <!----> */}
      </div>
    </div>
  );
}

export default Project
