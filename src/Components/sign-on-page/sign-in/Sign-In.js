import React from 'react'
import './sign-in.css'



const SignUp = () => {
    return (
        <div className="sign-in-card">
                <div className='login-h1'>
                Login to Your Account
                </div>
            <div>
                <div>
                    Email
                </div>
                <input className='input-bar' type='text' placeholder="  Email"></input>
            </div>
            <div>
                <div>
                Password
                </div>
                <input className='input-bar'  type='text' placeholder="  Password"></input>
            </div>
            <div className='login-check-box'>
            <span className='check'>
                <input className='input-bar'  type='checkbox' checked='check'></input>
            </span>
            <span className='remember'>
                <p>
                    Remember me
                </p>
            </span>
            <span className='forgot'>
                Forgot Password
            </span>
            </div>
            <div>
                <button className='input-bar login-button'>Login</button>
            </div>
        </div>
    )
}


    export default SignUp