import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './login-card.css'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        
            <button className='input-bar' onClick={() => loginWithRedirect()}  >
                Log In
            </button>
        
    )
}

export default LoginButton