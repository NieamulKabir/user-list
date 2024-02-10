/* eslint-disable react/prop-types */
import { useState } from "react";

const Sort = ({users,setFilteredUsers}) => {
    const [sortOption, setSortOption] = useState("");
      // Function to sort users based on selected option
  const sortUsers = (option) => {
    let sortedUsers = [...users];
    switch (option) {
      case "name":
        sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case "email":
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case "company":
        sortedUsers.sort((a, b) =>
          a.company.name.localeCompare(b.company.name)
        );
        break;
      default:
        break;
    }
    setFilteredUsers(sortedUsers);
  };
  return (
    <div className="flex justify-end mr-6 pb-6 mt-2 border">
      <label htmlFor="sortSelect" className="mr-2 font-semibold">
        Sort by:
      </label>
      <select
        id="sortSelect"
        className="px-2 py-1 border border-gray-300 rounded-md"
        value={sortOption}
        onChange={(e) => {
          setSortOption(e.target.value);
          sortUsers(e.target.value);
        }}
      >
        <option value="">Select Option</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="company">Company</option>
      </select>
    </div>
  );
};

export default Sort;
