import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error"; //union of string literals !!
};

function Status({ status }: StatusProps) {
  return <div>{status}</div>;
}
export default Status;
