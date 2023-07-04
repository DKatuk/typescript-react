import React from "react";

type InputProps = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ handleChange }: InputProps) {
    // you don't have to give handleChange fn as props. You can define it inside the component as well.
  const hadleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("input changed:", e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="type some input"
      onChange={hadleInputChange}
    />
  );
}

export default Input;
