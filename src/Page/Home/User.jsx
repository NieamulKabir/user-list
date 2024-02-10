import useUsers from "../../hooks/useUsers";
import UserListCard from "../../components/UserListCard";
import SearchUser from "../SearchUser";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Sort from "../Sort";

const User = () => {
  const [usersData] = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);

  const users = usersData?.users?.slice(0, 6);

  //search user by firstName
  function handleSearch(searchTerm) {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    searchTerm("");
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <h1 className="text-center text-xl md:text-4xl  font-bold mt-10 md:mt-16 mb-4">
        User Lists
      </h1>
      {/* search functionality  */}
      <SearchUser onSearch={handleSearch} setFilteredUsers={setFilteredUsers} />
      {/* sort user information  */}
      <Sort setFilteredUsers={setFilteredUsers} users={users} />

      {/* user list  */}
      <UserListCard users={filteredUsers.length > 0 ? filteredUsers : users} />
      <NavLink to={`/allUser`}>
        <button className="w-[150px] mx-auto bg-gray-800 text-white text-center flex justify-center  items-center mb-10 px-3 py-2 rounded-xl">
          See All Users
        </button>
      </NavLink>
    </div>
  );
};

export default User;
