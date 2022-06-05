/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import Header from "components/Header";
import InputBox from "components/Input";
import Notes from "components/Notes";

import { TodoContext } from "context";
import { INPUT_BOX_CLICKED } from "context/actionTypes";

const App = () => {
  const { dispatch, updateNote, fetchNotes } = useContext(TodoContext);

  const handleBodyClick = ({ target: { dataset } }) => {
    const { box } = dataset || {};

    if (box !== "input") {
      updateNote();
      dispatch({
        type: INPUT_BOX_CLICKED,
        payload: false,
      });
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div
      className="w-full h-full"
      data-toggle="input-box"
      onClickCapture={handleBodyClick}
    >
      <Header />
      <InputBox />
      <Notes />
    </div>
  );
};

export default App;
