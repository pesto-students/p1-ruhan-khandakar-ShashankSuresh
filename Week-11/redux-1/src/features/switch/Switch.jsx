import { useDispatch } from "react-redux";

import { MoonIcon, SunIcon } from "icons/icons";

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
        <MoonIcon color="pink" />
        <SunIcon color="yellow" />
        <div className="ball" />
      </label>
    </div>
  );
};

export default Switch;
