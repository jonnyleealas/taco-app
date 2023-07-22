import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import LogOutButton from "./log-out-button";

/**
 *  The Profile component
 * @return {component} the Profile component
 */
function Profile() {
  const {user, isAuthenticated} = useAuth0();

  const [tacoUser, setTacoUserState] = useState({});

  useEffect(() => {
    /**
     *  Fetch user function
     * @return {user} the user object
     */
    async function fetchUser() {
      const rez = await fetch("http://localhost:3001/api/v1/users/getOrCreateUserByEmail", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: user.given_name,
          lastName: user.family_name,
          email: user.email,
        }),
      });

      const rezJson = await rez.json();
      setTacoUserState(rezJson);
    }

    fetchUser();
  }, [user]);

  // try to connect this to our backend.
  return (

    isAuthenticated && (
      <article>
        <h1>{user.name}</h1>
        <h2>
        tacoUser?
          {tacoUser.id}
          {" "}
        -
          {" "}
          {tacoUser.email}
        </h2>
        <p>Access has been granted</p>
        <LogOutButton />
      </article>
    )
  );
}

export default Profile;
