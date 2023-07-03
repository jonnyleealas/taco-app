import React from 'react'
import SignUp from './sign-up-card/Sign-Up-Card'

import tacoPic from './images/tacoImage.jpg'
import './login-page.css'


const signOnPage = () => {
    return (
        <div className='sign-on-page'>
            <SignUp />
            <img className='taco-image' src={tacoPic} alt='tacos' />
            {/* <SignIn /> */}
        </div>
    )
}

export default signOnPage