import React from 'react'
import LoginCard from './Login-Card/Login-Card'
import tacoPic from './images/tacoImage.jpg'
import './login-page.css'


const LoginPage = () => {
    return (
        <div className='sign-on-page'>
            <LoginCard />
            <img className='taco-image' src={tacoPic} alt='tacos' />
        </div>
    )
}

export default LoginPage