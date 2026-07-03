import { useRef, useState } from "react";

export default function UC() {
  const [value, setValue] = useState("")
  // console.log(value)
  let inputRef = useRef();

//   function handleSubmit(){
//     console.log(inputRef.current.value)
//   }
  return (
    <>
      <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
      <button disabled={value.length>5? true: false}>click</button>
     {
        value.length>5?  <div>You have exceed the limit </div>: ""
     }
      {/* <input type="text" ref={inputRef} />
      <button onClick={handleSubmit} disabled={}>Submit</button> */}
    </>
  );
}
