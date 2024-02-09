import UserListCard from "../../components/UserListCard";
import useUsers from "../../hooks/useUsers";

const AllUsers = () => {
  const [usersData] = useUsers();
  const users = usersData?.users;
  console.log(users);
  return (
    <div>
      <UserListCard users={users} />
    </div>
  );
};

export default AllUsers;
