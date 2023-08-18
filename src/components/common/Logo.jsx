import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/components"} className="flex  items-center gap-x-2">
      <h1 className="flex items-center justify-center border-4 border-text-1  h-16 w-16 rounded-full text-text-1 text-3xl font-bold">
        H
      </h1>
      <span className="text-text-1 font-bold text-2xl  tracking-widest">
        eadless
      </span>
    </Link>
  );
};

export default Logo;
