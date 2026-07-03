// import { useEffect, useState } from "react";
// import "./Header.css";
// export function Header({ name }) {
//   // let name="akshat"
//   let array = ["akshat", "hemant", "raghav", "natik", "aditya", "amit"];

//   // let count=0;

//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1); //schedule just after the function
//     console.log(count);
//   }

//   useEffect(() => {
//     console.log("mounted",name);
//     return () => {
//       console.log("unmounted");
//     };
//   }, [count,name]);

//   //logics
//   return (
//     <>
//       {/* react fragment */}
//       <div className="header">
//         <div onClick={increment}>Logo </div>
//         <div>
//           Navigation {name} {count}
//         </div>
//         <div>
//           <input type="search" />
//         </div>

//         {array.map(function (value, index) {
//           return <div>{value}</div>;
//         })}
//       </div>
//     </>
//   );
// }
import React from 'react'
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="header">
        <div>Logo </div>
        <div>
          Navigation
        </div>
        <div>
          <input type="search" />
        </div>
        </div>
    </>
  )
}
