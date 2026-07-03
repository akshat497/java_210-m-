import React from 'react'
import "./Login.css"
import users from "../utils/users.json"
export default function () {
    console.log(users)
  return (
    <>
        <div className='Login'>
           <div className='Login-container'>
             <h1>Login</h1>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <div className='Login-container-footer'>
                <div>
                <input type="checkbox" />
                 Remember me
                 
                 </div>
            <div>Forget Password</div>
            </div>
            <button>Login</button>
           </div>
        </div>
    </>
  )
}
