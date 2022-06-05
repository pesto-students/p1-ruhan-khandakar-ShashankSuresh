import { useContext } from "react";

import { TodoContext } from "context";

const Search = () => {
  const {
    handleSearch,
    state: { searchText },
  } = useContext(TodoContext);

  const handleChange = ({ target: { value } }) => {
    handleSearch(value);
  };

  return (
    <div className="mb-3 w-full md:mt-0 mt-5">
      <input
        type="search"
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        h-[45px]
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        placeholder="Type query"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
