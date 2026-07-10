// import { useState } from "react";
// import { Header } from "./Header/Header";

// export default function App({age }) {
//   //destucturing of object
//   const [show, setshow] = useState(true);
//   const [name, setName] = useState("akshat")
//   console.log("inside app", name, age);
//   function changeProp(){
//     setName("changed")

//   }
//   //js
//   return (
//     <>
//       {show ? <Header name={name} age={25} /> : ""}
//       <div>
//         I am app{name}
//         {age}
//       </div>
//       <button
//         onClick={() => {
//           setshow(!show);
//         }}
//       >
//         Unmount
//       </button>
//       <button onClick={changeProp}>change prop</button>
//     </>
//   );
// }
import React, { createContext } from "react";
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./contact/Contact";
import Home from "./Home/Home";

export let userContext=createContext()
export  function App() {


  let name="akshat"
  let age=25
  let arr=[1,2,3,4,5]

  return (
    <>
      <BrowserRouter>
      <userContext.Provider value={{name,age,arr}}>
        <Header name={name} />
        <Routes>
          <Route path="/" element={<Login name={name} age={age} />} />
          <Route path="/contact" element={<Contact name={name} age={age} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}
    
