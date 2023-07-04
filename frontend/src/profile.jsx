import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "./log-out-button";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  // try to connect this to our backend.
  fetch(':3001/api/v1/users/getOrCreateUserByEmail', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: user.given_name,
      lastName: user.family_name,
      email: user.email
    }),
  })
}
  // we should try to hit our backend at :3001/api/v1/users/getOrCreateUserByEmail/?email=`${user.email}`
  return (

    isAuthenticated && (
    <article>
      <h1>{user.name}</h1>
      <p>Access has been granted</p>
      <LogOutButton />
    </article>
    )

  );
}

export default Profile;
