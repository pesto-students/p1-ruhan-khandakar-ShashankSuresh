import React from "react";

import ComputerVector from "assets/computer_vector.png";

const Shortner = () => {
  return (
    <div className="flex flex-col items-center justify-between xs:flex-row">
      <div className="details">
        <h1 className="text-2xl mt-4  text-center xs:text-5xl md:mt-0  xs:text-left">
          More than just shorter links
        </h1>
        <p className="text-sm mt-2 text-center xs:mt-8 xs:text-left xs:text-xl">
          Build your brand's recognition and <br /> get detailed insights on how
          your links are performing
        </p>
      </div>
      <div className="img -order-1 xs:order-last">
        <img
          src={ComputerVector}
          alt="computer_vector"
          className="h-[300px] w-full"
        />
      </div>
    </div>
  );
};

export default React.memo(Shortner);
