import React from "react";
import Button from "./Button";

const list = [
  "Javascript",
  "Programming",
  "Telugu Cinema",
  "Podcasts",
  "News",
  "Music",
  "Live",
  "Programming",
  "Telugu Cinema",
  "Podcasts",
];
const ButtonList = () => {
  return (
    <div className=" w-full flex items-center">
      <ul className="flex gap-4 p-4 items-center">
        {list.map((item) => (
          <Button name={item} />
        ))}
      </ul>
    </div>
  );
};

export default ButtonList;
