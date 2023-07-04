import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement> , id: number) => void;
};

function Button({ handleClick }: ButtonProps) {
  return (
    <button
      onClick={(event) => handleClick(event,10)}
      style={{ padding: "5px", backgroundColor: "green", color: "white" }}
    >
      Click
    </button>
  );
}

export default Button;
