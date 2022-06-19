import ComputerVector from "assets/computer_vector.png";

const Shortner = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="details">
        <h1 className="text-5xl">More than just shorter links</h1>
        <p className="text-xl mt-8">
          Build your brand's recognition and <br /> get detailed insights on how
          your links are performing
        </p>
      </div>
      <div className="img">
        <img
          src={ComputerVector}
          alt="computer_vector"
          className="h-[200px] w-full"
        />
      </div>
    </div>
  );
};

export default Shortner;
