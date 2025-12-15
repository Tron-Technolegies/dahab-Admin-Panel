import React from "react";
import { Link } from "react-router-dom";

export default function SingleError() {
  return (
    <div className="bg-primary   flex flex-col gap-5 justify-center items-center ">
      {/* <div className="text-5xl font-bold">404!</div> */}
      <p className="text-lg">There was some error fetching data</p>
      <Link to={"/"} className="px-4 py-2 rounded-lg bg-blue-600 text-white">
        Back Home
      </Link>
    </div>
  );
}
