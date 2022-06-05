import { Children } from "react";
import PropTypes from "prop-types";

import Note from "./Note";

const Notes = ({ allNotes, type, getNotesLength }) => {
  if (!allNotes.length) {
    return null;
  }
  const totalTypesLength = getNotesLength.completed + getNotesLength.pinned;

  return (
    <div className="container m-auto mb-3 mt-10">
      {totalTypesLength >= 1 && <p className="text-neutral-400 mb-2">{type}</p>}
      <div className="m-auto flex gap-4 pb-3">
        {Children.toArray(allNotes.map((note) => <Note note={note} />))}
      </div>
    </div>
  );
};

Notes.propTypes = {
  allNotes: PropTypes.array,
  type: PropTypes.string,
  getNotesLength: PropTypes.object,
};

export default Notes;
