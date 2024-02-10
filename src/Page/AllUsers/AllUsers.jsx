import { useState } from "react";
import UserListCard from "../../components/UserListCard";
import useUsers from "../../hooks/useUsers";
import SearchUser from "../SearchUser";
import Sort from "../Sort";

const AllUsers = () => {
  const [usersData] = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const users = usersData?.users;

  function handleSearch(searchTerm) {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    searchTerm("");
  }

  return (
    <div className="mt-16  min-h-screen max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-bold pt-10">See All Users</h1>
      <SearchUser onSearch={handleSearch} setFilteredUsers={setFilteredUsers} />
      <Sort setFilteredUsers={setFilteredUsers} users={users} />
      <UserListCard users={filteredUsers.length > 0 ? filteredUsers : users} />
    </div>
  );
};

export default AllUsers;
