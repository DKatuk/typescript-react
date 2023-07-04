import React from "react";
import { PersonListProps } from "./Employees.types";

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
