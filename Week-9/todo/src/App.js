import { useContext } from "react";

import Header from "components/Header";
import InputBox from "components/Input";

import { TodoContext } from "context";
import { INPUT_BOX_CLICKED } from "context/actionTypes";

const App = () => {
  const { dispatch } = useContext(TodoContext);

  const handleBodyClick = ({ target: { dataset } }) => {
    const { toggle } = dataset || {};
    if (toggle === "input-box") {
      dispatch({
        type: INPUT_BOX_CLICKED,
        payload: false,
      });
    }
  };

  return (
    <div
      className="w-full h-full"
      data-toggle="input-box"
      onClickCapture={handleBodyClick}
    >
      <Header />
      <InputBox />
    </div>
  );
};

export default App;
