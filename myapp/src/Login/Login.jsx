import React, { useCallback, useMemo, useState } from "react";
import "./Login.css";
import users from "../utils/users.json";
export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function LoginUser() {
    const user = users.find(function (user) {
      debugger
      return (user.email === username && user.password === password);
    });
    if (user) {
      debugger
      alert("Login Successful");
    } else {
      debugger
      alert("Invalid Credentials");
    }
  }

    // useMemo(()=>{
    //   10=20
    //   30
    // },[])


    // useCallback(()=>{
    //  x+y
    // },[username])
  return (
    <>
      <div className="Login">
        <div className="Login-container">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <div className="Login-container-footer">
            <div>
              <input type="checkbox" />
              Remember me
            </div>
            <div>Forget Password</div>
          </div>
          <button onClick={LoginUser}>Login</button>
        </div>
      </div>
    </>
  );
}
