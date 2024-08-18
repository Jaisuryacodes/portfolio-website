import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx';
import Skills from './components/Skills.jsx';
import Profile from './components/Profile.jsx';
function App() {
 const [status,setStatus]=useState(true);
 function onhandling(){
  setStatus((previous) => !previous);
 }

  return (
    <div className=" flex flex-col gap-10 " id="home">
      <div className=" fixed z-10 top-0  w-full ">
        <Header />
      </div>
      <div className=" mt-[48px] md:mt-[128px] ">
        <Profile />
      </div>
      <div className="  " id="Skills">
        <Skills />
      </div>

      <div className="">
        {status ? (
          <div className="" id="contact">
            <Contact />
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
      <div className=" bg-[#222222] mt-4  px-[16px] md:px-28 py-4 md:gap-4 flex flex-col  justify-start">
        <h3
          onClick={onhandling}
          className="text-[#7c3aed] mt-0 font-semibold text-[16px] md:text-3xl cursor-pointer"
        >
          Contact Me
        </h3>

        <Footer />
      </div>
    </div>
  );
}

export default App
