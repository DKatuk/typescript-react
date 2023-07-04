import React from "react";

//always define prop types of the component before hand.
type PersonListProps = { 
  names: {
    first: string;
    last: string;
  }[];
}; // array of objects, but this object has a type with two fields : first and last, which are both string.

function Employees({ names }: PersonListProps) {
  return (
    <>
      {names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </>
  );
}

export default Employees;
