import React from "react";

type InputProps = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styles: React.CSSProperties;
};

function Input({ handleChange, styles }: InputProps) {
  // you don't have to give handleChange fn as props. You can define it inside the component as well.
  const hadleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("input changed:", e.target.value);
  };
  return (
    <input
      type="text"
      style={styles}
      placeholder="type some input"
      onChange={hadleInputChange}
    />
  );
}

export default Input;
