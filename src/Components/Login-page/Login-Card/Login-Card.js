import React from 'react'
import './login-card.css'
import LoginButton from './LoginButton'

const Login = () => {
    return (
        <div className="signin-card">
            <div>
                <h1>
                    Welcome to the Taco App
                </h1>
                <p className='free-trial'>
                    Find and rate Tacos Spots <br></br> all over the country 
                </p>
                

            {/* <input className='input-bar' type="text" placeholder="Login with Google"></input> */}
                {/* <hr className='hr-text' data-content='or'></hr> */}
    
            </div>
            <div>
                {/* <div className='name'>
                    Name
                </div> */}
                {/* <input className='input-bar' type="text" placeholder="  Name"></input> */}
            </div>
            <div>
                {/* <div className='name'>
                    Email
                </div> */}
                {/* <input className='input-bar' type='text' placeholder="  Email"></input> */}
            </div>
            {/* <div>
                <div className='name'>
                    Password
                </div>
                <input className='input-bar' type="text" placeholder="  Password"></input>
            </div> */}
            <div className='check-box'>
                <span>
                    <input type="checkbox" checked="checked"></input>
                </span>
                <span>
                    <p>
                        I agree to all Term, Privacy Policy and Fees
                    </p>
                </span>
            </div>
            <div>
               
                <LoginButton className='input-bar' />
                {/* <button className='input-bar'>Sign Up</button> */}
            </div>
            {/* <div>
                Already have an account? 
            </div> */}
        </div>
    )
}

export default Login