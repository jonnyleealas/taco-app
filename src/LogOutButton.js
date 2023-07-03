import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogOutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (

        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin} })}>
            Log Out
        </button>
        
        )
    )
}

export default LogOutButton