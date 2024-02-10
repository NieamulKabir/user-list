
import useUsers from '../../hooks/useUsers';
import UserListCard from '../../components/UserListCard';

const User = () => {
  const [usersData] = useUsers();
  const users = usersData?.users?.slice(0, 6);
  // console.log(users);
  // console.log(users.users);

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <h1 className="text-center text-xl md:text-4xl  font-bold mt-10 mb-4">
        User Lists
      </h1>
      <UserListCard users={users} />
    </div>
  );
};

export default User;
