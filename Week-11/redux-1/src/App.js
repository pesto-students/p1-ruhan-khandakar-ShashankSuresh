import { useSelector } from "react-redux";

import Switch from "features/switch/Switch";

import "./App.css";

function App() {
  const { isLightOn } = useSelector((state) => state.switch);

  return (
    <div className={`container ${!isLightOn ? "dark" : ""}`}>
      <div className="box">
        <p className={`${isLightOn ? "light" : "dark"}`}>
          The Room is {isLightOn ? "Lit" : "Dark"}
        </p>
        <Switch />
      </div>
    </div>
  );
}

export default App;
