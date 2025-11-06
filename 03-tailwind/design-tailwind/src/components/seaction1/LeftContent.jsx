import React from "react";
import Arrow from "./Arrow";
import Herotext from "./Herotext";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between py-10 px-6">
      <Herotext />
      <Arrow />       
    </div>
  );
};

export default LeftContent;
