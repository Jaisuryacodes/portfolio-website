import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx';
import Skills from './components/Skills.jsx';
function App() {
 const [status,setStatus]=useState(false);
 function onhandling(){
  setStatus((previous) => !previous);
 }

  return (
    <>
      <Header />
      <Skills />
      {status ? (
        <div className="">
          <Contact />
        </div>
      ) : (
        <div className=""></div>
      )}
      <div className=" bg-[#222222] mt-4 px-28 py-4 gap-4 flex flex-col  justify-start">
        <h3
          onClick={onhandling}
          className="text-[#7c3aed] font-semibold text-3xl cursor-pointer"
        >
          #Contact me
        </h3>

        <Footer />
      </div>
    </>
  );
}

export default App
