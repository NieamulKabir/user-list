/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdClear } from "react-icons/md";

const SearchUser = ({ onSearch, setFilteredUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  function handleClick(event) {
    event.preventDefault();
    onSearch(searchTerm);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleClear = () => {
    setFilteredUsers([]);
    setSearchTerm("");
  };
  return (
    <div className="mt-10 mr-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-end">
          <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
              placeholder="Search User"
              value={searchTerm}
              onChange={() => setSearchTerm(event.target.value)}
              required
            />

            <button
              onClick={handleClick}
              type="submit"
              className="absolute  right-2 top-0 h-full rounded-e-lg text-white md:right-4"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
          <button
            onClick={() => handleClear("")}
            className="bg-red-500 text-white px-4 rounded-lg font-semibold ml-4 flex justify-center items-center"
          >
            <MdClear /> Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchUser;
