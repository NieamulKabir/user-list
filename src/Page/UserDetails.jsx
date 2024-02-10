import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetailCard from "../components/UserDetailCard";

const UserDetails = () => {
  let { id } = useParams();

  const [userDetails, setUserDetails] = useState({});

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
    <div className="mt-16 min-h-screen w-1/2 mx-auto pt-20 ">
      <UserDetailCard userDetails={userDetails} />
    </div>
  );
};

export default UserDetails;
