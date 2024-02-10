import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetailCard from "../components/UserDetailCard";

const UserDetails = () => {
  let { id } = useParams();

  const [userDetails, setUserDetails] = useState({});

  //   show single user details
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => {
        const singleUser = result.users;
        const data = singleUser?.find((user) => user.id == id);
        setUserDetails(data);
      });
  }, [id]);

  return (
    <div className="mt-16 min-h-screen md:w-1/2  pt-20 mx-auto px-2">
      <h1 className="font-bold text-center text-3xl mb-2">User Details</h1>
      <UserDetailCard userDetails={userDetails} />
    </div>
  );
};

export default UserDetails;
