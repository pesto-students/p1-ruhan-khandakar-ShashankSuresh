import { useContext } from "react";

import Header from "components/Header";
import InputBox from "components/Input";

import { TodoContext } from "context";
import { INPUT_BOX_CLICKED } from "context/actionTypes";

const App = () => {
  const {
    dispatch,
    updateNote,
    state: { allNotes },
  } = useContext(TodoContext);

  const handleBodyClick = ({ target: { dataset } }) => {
    const { toggle } = dataset || {};
    if (toggle === "input-box") {
      updateNote();
      dispatch({
        type: INPUT_BOX_CLICKED,
        payload: false,
      });
    }
  };

  console.log("allNotes", allNotes);

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
