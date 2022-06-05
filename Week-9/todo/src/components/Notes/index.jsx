import { useContext, Children } from "react";

import Note from "./Note";
import { TodoContext } from "context";

const Notes = () => {
  const {
    state: { allNotes },
  } = useContext(TodoContext);

  return (
    <div className="container m-auto mt-10 flex gap-4 ">
      {Children.toArray(allNotes.map((note) => <Note note={note} />))}
    </div>
  );
};

export default Notes;
