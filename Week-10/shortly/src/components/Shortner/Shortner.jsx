import React from "react";

import ComputerVector from "assets/computer_vector.png";

const Shortner = () => {
  return (
    <div className="flex items-center justify-between mx-sm:flex-col">
      <div className="details">
        <h1 className="text-5xl mx-md:text-3xl mx-sm:text-2xl mt-4 text-left md:mt-0  mx-sm:text-center">
          More than just shorter links
        </h1>
        <p className="text-sm mt-2 text-left xs:mt-8 mx-sm:text-center xs:text-xl">
          Build your brand's recognition and <br /> get detailed insights on how
          your links are performing
        </p>
      </div>
      <div className="img  mx-sm:-order-1">
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
