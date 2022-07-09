import { useContext } from "react";
import {
  AiFillDelete,
  AiFillPushpin,
  AiOutlinePushpin,
  AiOutlineCheckCircle,
  AiFillCheckCircle,
} from "react-icons/ai";

import { TodoContext } from "context";

export const Footer = ({ handleModalClose }) => {
  const {
    deleteNote,
    state: { noteInputData },
  } = useContext(TodoContext);

  const handleDelete = () => {
    deleteNote(noteInputData.id);
    handleModalClose(false);
  };
  const handleClose = () => {
    handleModalClose(false);
  };

  return (
    <div className="flex justify-end p-2 pb-0 border-t border-solid border-slate-200 rounded-b">
      <button className="text-xl mr-2 text-red-500" onClick={handleDelete}>
        <AiFillDelete />
      </button>
      <button className="text-md mr-2 font-bold" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

const MoreDetails = ({ setNotesData, notesData }) => {
  const {
    togglePinned,
    toggleNoteCompletion,
    state: { noteInputData },
  } = useContext(TodoContext);

  const handleTitleChange = ({ currentTarget }) => {
    setNotesData({
      ...notesData,
      title: currentTarget.textContent,
    });
  };

  const handleNoteChange = ({ currentTarget }) => {
    setNotesData({
      ...notesData,
      note: currentTarget.textContent,
    });
  };

  const handlePinned = (e) => {
    togglePinned(noteInputData.id);
  };
  const handleComplete = (e) => {
    toggleNoteCompletion(noteInputData.id);
  };

  return (
    <div className="p-3 max-h-[80vh] min-h-[200px]  overflow-y-auto ">
      <div className="flex justify-between items-center">
        <div
          contentEditable
          name="note"
          className="mb-2 flex-1"
          onInput={handleTitleChange}
          suppressContentEditableWarning
        >
          {noteInputData.title || "Enter Title"}
        </div>
        <div>
          <button
            className="text-xl mx-3"
            onClick={handleComplete}
            title="Completed/Uncompleted"
          >
            {noteInputData.completed ? (
              <AiOutlineCheckCircle />
            ) : (
              <AiFillCheckCircle />
            )}
          </button>
          <button className="text-xl mr-2" onClick={handlePinned}>
            {noteInputData.isPinned ? <AiOutlinePushpin /> : <AiFillPushpin />}
          </button>
        </div>
      </div>
      <div
        contentEditable
        name="note"
        className="mt-4 min-h-[100px]"
        onInput={handleNoteChange}
        suppressContentEditableWarning
      >
        {noteInputData.note || "Write some note"}
      </div>
    </div>
  );
};

export default MoreDetails;
