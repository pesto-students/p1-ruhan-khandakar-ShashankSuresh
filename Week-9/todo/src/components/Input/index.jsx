import { useContext, useRef, useEffect } from "react";

import { TodoContext } from "context";
import { INPUT_BOX_CLICKED, INPUT_TEXT_CHANGE } from "context/actionTypes";

const InputBox = () => {
  const {
    dispatch,
    state: { isInputBoxClicked, noteInputData },
  } = useContext(TodoContext);
  const noteBodyRef = useRef(null);

  const handleInputBoxClick = () => {
    dispatch({
      type: INPUT_BOX_CLICKED,
      payload: !isInputBoxClicked,
    });
  };

  const handleClose = () => {
    dispatch({
      type: INPUT_BOX_CLICKED,
      payload: !isInputBoxClicked,
    });
  };

  const onChange = ({ target: { name, value } }) => {
    console.log({ name, value });
    dispatch({
      type: INPUT_TEXT_CHANGE,
      payload: { name, value },
    });
  };

  useEffect(() => {
    if (isInputBoxClicked) {
      noteBodyRef.current?.focus();
    }
  }, [isInputBoxClicked]);

  return (
    <div className="container m-auto w-1/2">
      {!isInputBoxClicked ? (
        <textarea
          onClick={handleInputBoxClick}
          className="resize-none rounded-md w-full h-14 p-4 pt-3.5 text-lg outline-none border-slate-400 border-2 box-border"
          placeholder="Take a note"
        />
      ) : (
        <div className="border-slate-400 border-2 box-border flex flex-col rounded-md">
          <textarea
            className="resize-none w-full h-14 p-4 pt-3.5 text-lg outline-none rounded-none rounded-t-md "
            placeholder="Title"
            name="title"
            onChange={onChange}
            value={noteInputData.title}
          />
          <textarea
            className="resize-none w-full h-14 p-4 pt-3.5 text-sm outline-none rounded-none "
            placeholder="Take a note"
            name="note"
            onChange={onChange}
            value={noteInputData.note}
            ref={noteBodyRef}
          />
          <div className="text-right bg-white rounded-b-md pb-2">
            <button className="pr-4 font-medium" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputBox;
