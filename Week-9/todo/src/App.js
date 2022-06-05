/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import Header from "components/Header";
import InputBox from "components/Input";

import { TodoContext } from "context";
import { INPUT_BOX_CLICKED } from "context/actionTypes";

const App = () => {
  const { dispatch, updateNote, fetchNotes, state } = useContext(TodoContext);

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

  useEffect(() => {
    fetchNotes();
    console.log("should be call only once");
  }, []);

  console.log("state", state);
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
