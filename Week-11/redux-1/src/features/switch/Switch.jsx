import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { toggleSwitch } from "./switchSlice";

const Switch = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { checked } }) => {
    dispatch(toggleSwitch(!checked));
  };
  return (
    <div className="switch-container">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className="label">
        <FaMoon color="pink" />
        <FaSun color="yellow" />
        <div className="ball" />
      </label>
    </div>
  );
};

export default Switch;
