import WaveSvg from "assets/wave.svg";

const Input = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.3) , rgba(0,0,0,0.3)),url(${WaveSvg})`,
      }}
      className="card w-full bg-neutral text-neutral-content shadow-lg shadow-cyan-800/20 mt-8"
    >
      <div className="card-body items-center text-center flex-row justify-between">
        <input
          type="text"
          placeholder="Shorten a link here"
          className="input input-bordered w-full"
        />
        <button className="btn btn-accent">Shorten It!</button>
      </div>
    </div>
  );
};

export default Input;
