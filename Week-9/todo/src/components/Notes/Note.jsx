import { useContext, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiOutlineCheckCircle,
  AiFillPushpin,
  AiOutlinePushpin,
} from "react-icons/ai";

import Modal from "components/Common/Modal";
import MoreDetails, { Footer } from "./MoreDetails";
import { TodoContext } from "context";
import { UPDATE_NOTE } from "context/actionTypes";

const Note = ({ note }) => {
  const {
    dispatch,
    updateNote,
    deleteNote,
    toggleNoteCompletion,
    togglePinned,
    handleModalToggle,
    editNote,
    state: { open },
  } = useContext(TodoContext);
  const [editedNotesData, setEditedNotesData] = useState({});

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
  };
  const handleComplete = (e) => {
    e.stopPropagation();
    toggleNoteCompletion(note.id);
  };
  const handlePinned = (e) => {
    e.stopPropagation();
    togglePinned(note.id);
  };

  const handleDetails = () => {
    dispatch({
      type: UPDATE_NOTE,
      payload: note,
    });
    handleModalToggle(true);
  };
  const handleModalClose = () => {
    if (Object.keys(editedNotesData).length) {
      editNote({
        ...note,
        ...editedNotesData,
      });
    }
    handleModalToggle();
    updateNote();
  };

  return (
    <>
      <div
        className="group rounded p-6 md:w-[300px] w-full bg-slate-100 border-gkBorderColor border-2 cursor-pointer hover:bg-slate-100 relative flex flex-col justify-between min-h-[120px] max-h-[400px] hover:shadow-md"
        onClick={handleDetails}
      >
        <button
          className="hidden ease-in-out text-3xl absolute -top-2.5 -left-2.5 group-hover:inline-block "
          onClick={handleComplete}
          title="Completed/Uncompleted"
        >
          {note.completed ? <AiOutlineCheckCircle /> : <AiFillCheckCircle />}
        </button>
        <button
          className="hidden ease-in-out text-2xl absolute top-1 right-1 group-hover:inline-block "
          onClick={handlePinned}
          title="Pinned/Unpinned"
        >
          {note.isPinned ? <AiOutlinePushpin /> : <AiFillPushpin />}
        </button>
        <div className="details">
          {note.title && (
            <p className="text-base font-medium truncate pb-4">{note.title}</p>
          )}
          {note.note && (
            <p
              className={`text-lg font-normal overflow-hidden text-ellipsis line-clamp-3 ${
                note.note.length > 150 ? "h-[200px]" : "h-full"
              }`}
            >
              {note.note}
            </p>
          )}
        </div>
        <div className="hidden justify-end group-hover:flex">
          <button className="text-xl mr-2 text-red-500" onClick={handleDelete}>
            <AiFillDelete />
          </button>
        </div>
      </div>
      {open && (
        <Modal
          open={open}
          handleClose={handleModalClose}
          footer={<Footer handleModalClose={handleModalClose} />}
        >
          <MoreDetails
            setNotesData={setEditedNotesData}
            notesData={editedNotesData}
          />
        </Modal>
      )}
    </>
  );
};

export default Note;
