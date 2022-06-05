import { useContext } from "react";

import { TodoContext } from "context";
import { INPUT_BOX_CLICKED } from "context/actionTypes";

const InputBox = () => {
  const {
    dispatch,
    state: { isInputBoxClicked },
  } = useContext(TodoContext);

  const handleInputBoxClick = () => {
    dispatch({
      type: INPUT_BOX_CLICKED,
      payload: !isInputBoxClicked,
    });
  };

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
          />
          <textarea
            className="resize-none w-full h-14 p-4 pt-3.5 text-sm outline-none rounded-none rounded-b-md"
            placeholder="Take a note"
          />
        </div>
      )}
    </div>
  );
};

export default InputBox;
