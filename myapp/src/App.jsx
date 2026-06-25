import { useState } from "react";
import { Header } from "./Header/Header";

export default function App({age }) {
  //destucturing of object
  const [show, setshow] = useState(true);
  const [name, setName] = useState("akshat")
  console.log("inside app", name, age);
  function changeProp(){
    setName("changed")
    
  
  }
  //js
  return (
    <>
      {show ? <Header name={name} age={25} /> : ""}
      <div>
        I am app{name}
        {age}
      </div>
      <button
        onClick={() => {
          setshow(!show);
        }}
      >
        Unmount
      </button>
      <button onClick={changeProp}>change prop</button>
    </>
  );
}
