import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

const Note = ({ note }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("deleted", note.id);
  };
  const handleComplete = (e) => {
    e.stopPropagation();
    console.log("completed", note.id);
  };
  const handleDetails = () => {
    console.log("details", note);
  };
  return (
    <div
      className="group rounded p-6 w-[300px] bg-slate-100 border-gkBorderColor border-2 cursor-pointer hover:bg-slate-100 relative flex flex-col justify-between min-h-[120px] max-h-[400px] hover:shadow-md"
      onClick={handleDetails}
    >
      <button
        className="hidden ease-in-out text-3xl absolute -top-2.5 -left-2.5 group-hover:inline-block"
        onClick={handleComplete}
      >
        <AiFillCheckCircle />
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
  );
};

export default Note;
