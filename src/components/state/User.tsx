import React, { useState } from "react";

type AuthUser = {
  name: string;
};

function User() {
  const [user, setUser] = useState<null | AuthUser>(null); // user can be either null or AuthUser object but that means you have to check if the user is not null
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser); // this way you don't have to check if the user is null when rendering.
    
    
  const handleLogin = () => {
    setUser({
      name: "Dilara",
    });
  };
  const handleLogout = () => {
    // and you won't be needing this button.
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Retrieve User Info</button>
      <button onClick={handleLogout}>Delete User Info</button>
      <p>User name is {user ? <span>{user.name}</span> : "not available"}</p>
    </div>
  );
}

export default User;
