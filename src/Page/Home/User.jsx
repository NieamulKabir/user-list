import useUsers from "../../hooks/useUsers";
import UserListCard from "../../components/UserListCard";
import SearchUser from "./SearchUser";
import { useState } from "react";

const User = () => {
  const [usersData] = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const users = usersData?.users?.slice(0, 6);

  function handleSearch(searchTerm) {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }
  console.log(users);

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <h1 className="text-center text-xl md:text-4xl  font-bold mt-10 mb-4">
        User Lists
      </h1>
      <SearchUser  onSearch={handleSearch}/>
      <UserListCard users={filteredUsers.length > 0 ? filteredUsers : users} />
    </div>
  );
};

export default User;
