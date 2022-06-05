import { useContext } from "react";

import { TodoContext } from "context";
import Notes from "./Notes";

const AllNotes = () => {
  const {
    state: { allNotes },
  } = useContext(TodoContext);

  const getCompletedNotes = () =>
    allNotes.filter((note) => note.completed && !note.isPinned);
  const getPinnedNotes = () => allNotes.filter((note) => note.isPinned);
  const getOthersNotes = () =>
    allNotes.filter((note) => !note.isPinned && !note.completed);

  const getNotesLength = {
    completed: getCompletedNotes().length > 0 ? 1 : 0,
    pinned: getPinnedNotes().length > 0 ? 1 : 0,
    others: getOthersNotes().length > 0 ? 1 : 0,
  };

  return (
    <>
      {getPinnedNotes() && (
        <Notes
          type="PINNED"
          allNotes={getPinnedNotes()}
          getNotesLength={getNotesLength}
        />
      )}
      {getCompletedNotes() && (
        <Notes
          type="COMPLETED"
          allNotes={getCompletedNotes()}
          getNotesLength={getNotesLength}
        />
      )}
      {getOthersNotes() && (
        <Notes
          type="OTHERS"
          allNotes={getOthersNotes()}
          getNotesLength={getNotesLength}
        />
      )}
    </>
  );
};

export default AllNotes;
