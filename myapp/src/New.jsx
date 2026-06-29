import { useEffect, useState } from "react";

function Table() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Running");
    }, 1000);

    return function(){
        clearInterval(id)
    }
    
  }, []);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Akshat</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export function New() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  let counts = 10;

  function increment() {
    setCount(count + 1); //schedule
    console.log(count); //1
  }

  useEffect(
    function () {
      console.log("mounted");
    },
    [count],
  );

  return (
    <>
      <div>{count}</div>
      <div>{counts}</div>
      <button onClick={increment}>+</button>
      <button
        onClick={function () {
          setShow(!show);
        }}
      >
        Unmount
      </button>
      {show === true ? <Table /> : ""}
    </>
  );
}
