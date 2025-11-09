import React from "react";

const Button = ({ name }) => {
  return (
    <div className="text-sm  bg-gray-200 rounded-xl  px-4 py-2  hover:cursor-pointer">
      {name}
    </div>
  );
};

export default Button;
