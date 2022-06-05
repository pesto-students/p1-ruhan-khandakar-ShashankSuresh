import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

import { TodoContext } from "context";
import { INPUT_TEXT_CHANGE } from "context/actionTypes";

export const Footer = ({ handleModalClose }) => {
  const { deleteNote } = useContext(TodoContext);

  const handleDelete = () => {
    deleteNote();
  };

  return (
    <div className="flex justify-end p-2 pb-0 border-t border-solid border-slate-200 rounded-b">
      <button className="text-xl mr-2 text-red-500" onClick={handleDelete}>
        <AiFillDelete />
      </button>
      <button className="text-md mr-2 font-bold" onClick={handleModalClose}>
        Close
      </button>
    </div>
  );
};

const MoreDetails = () => {
  const {
    dispatch,
    state: { noteInputData },
  } = useContext(TodoContext);

  const onChange = ({ target: { name, value } }) => {
    dispatch({
      type: INPUT_TEXT_CHANGE,
      payload: { name, value },
    });
  };
  return (
    <div className="p-6 h-[80vh] overflow-y-auto ">
      <textarea
        className="resize-none w-full h-14 p-4 pt-3.5 text-lg outline-none rounded-none rounded-t-md "
        placeholder="Title"
        name="title"
        onChange={onChange}
        value={noteInputData.title}
        data-box="input"
      />
      <textarea
        className="resize-none w-full p-4 pt-3.5 text-sm outline-none rounded-none h-full"
        placeholder="Take a note"
        name="note"
        onChange={onChange}
        value={noteInputData.note}
        data-box="input"
      />
    </div>
  );
};

export default MoreDetails;
