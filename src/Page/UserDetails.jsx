import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const { image, firstName, lastName, email, address, company } = userDetails;

  return (
    <div className="mt-16 min-h-screen w-1/2 mx-auto pt-20 ">
      <div className="card card-compact  bg-base-100 shadow-xl ">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>

          <p>Email : {email}</p>
          <p>
            address : {address?.address} city:{address?.city}
          </p>
          <p>company : {company?.name} </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
