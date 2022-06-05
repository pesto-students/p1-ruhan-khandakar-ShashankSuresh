import { useContext, useRef, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";

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
    dispatch({
      type: INPUT_TEXT_CHANGE,
      payload: { name, value },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: INPUT_BOX_CLICKED,
      payload: !isInputBoxClicked,
    });
  };

  useEffect(() => {
    if (isInputBoxClicked) {
      noteBodyRef.current?.focus();
    }
  }, [isInputBoxClicked]);

  return (
    <div className="container md:m-auto md:w-1/2 w-full mt-3">
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
            data-box="input"
          />
          <textarea
            className="resize-none w-full h-14 p-4 pt-3.5 text-sm outline-none rounded-none "
            placeholder="Take a note"
            name="note"
            onChange={onChange}
            value={noteInputData.note}
            ref={noteBodyRef}
            data-box="input"
          />
          <div className="text-right bg-white rounded-b-md pb-2 flex justify-end items-center">
            <button
              className="text-xl mr-2 text-red-500"
              onClick={handleDelete}
            >
              <AiFillDelete />
            </button>
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
