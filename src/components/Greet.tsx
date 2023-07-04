import React from "react";

// You need to specify what type of the props will be
type Props = {
  userName: string;
  isLoggedIn: boolean;
  message?: string; // optional prop, it doesn't have to be passed and ts won't complain.
};

function Greet({ userName, isLoggedIn }: Props) {
  return (
    <div>
      {isLoggedIn
        ? `${userName}, welcome to React TypeScript tutorial!`
        : `Welcome Guest`}
    </div>
  );
}

export default Greet;
