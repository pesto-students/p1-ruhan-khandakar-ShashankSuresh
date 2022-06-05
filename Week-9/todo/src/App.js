/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import Header from "components/Header";
import InputBox from "components/Input";
import AllNotes from "components/Notes";

import { TodoContext } from "context";
import { INPUT_BOX_CLICKED } from "context/actionTypes";

const App = () => {
  const {
    dispatch,
    updateNote,
    fetchNotes,
    state: { noteInputData },
  } = useContext(TodoContext);

  const handleBodyClick = (event) => {
    const {
      target: { dataset },
    } = event;
    const { box } = dataset || {};

    if (box !== "input" && !noteInputData.id) {
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
      className="w-full h-full p-4"
      data-toggle="input-box"
      onClickCapture={handleBodyClick}
    >
      <Header />
      <InputBox />
      <AllNotes />
    </div>
  );
};

export default App;
