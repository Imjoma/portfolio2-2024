"use client";
import { useState } from "react";

const MouseFollower = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log(e.clientX);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {/* PC */}
      <div
        className="top-0 left-0 w-full h-full "
        onMouseMove={handleMouseMove}
      >
        <div
          className={`
          hidden lg:block w-[1000px] h-[1000px] rounded-full opacity-15 bg-gradient-radial from-themeColorPrimary via-transparent to-transparent pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2
         `}
          style={{ top: position.y, left: position.x }}
        ></div>
        {children}
      </div>
    </>
  );
};

export default MouseFollower;
