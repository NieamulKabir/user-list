import UserListCard from "../../components/UserListCard";
import useUsers from "../../hooks/useUsers";

const AllUsers = () => {
  const [usersData] = useUsers();
  const users = usersData?.users;
  console.log(users);
  return (
    <div className="mt-16 mx-16">
      <UserListCard users={users} />
    </div>
  );
};

export default AllUsers;
