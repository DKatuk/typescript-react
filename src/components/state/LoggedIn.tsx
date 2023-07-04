import React, { useState } from "react";

function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //ts infers the type of isLoggedIn variable with the initial value that we pass in. You don't need to specifically type useState hook variables and functions, type inference will take care of it.
    
    //What if we don't know the initial value ? Check User.tsx file to see.

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User is logged {isLoggedIn ? "in" : "out"}</p>
    </div>
  );
}

export default LoggedIn;
