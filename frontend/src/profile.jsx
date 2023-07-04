import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "./log-out-button";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

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
