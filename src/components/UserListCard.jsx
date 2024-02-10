import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserListCard = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 py-10 mx-6">
      {users?.map((user) => (
        <div key={user.id} className="card card-compact  bg-base-100 shadow-xl">
          <div className="avatar mx-auto mt-4">
            <div className="w-28 ring ring-gray-600 ring-offset-gray-100 ring-offset-2 rounded-full">
              <img src={user.image} />
            </div>
          </div>
          <div className="card-body">
            <NavLink to={`/userDetails/${user?.id}`}>
              <h2 className="card-title">
                {user.firstName} {user.lastName}
              </h2>
            </NavLink>

            <p className="text-md font-semibold">
              Email: <span className="text-green-500">{user.email}</span>
            </p>
            <p>
              <span className="font-semibold">Address</span>:{" "}
              {user?.address?.address}{" "}
              <span className="font-semibold">City</span>: {user.address?.city}
            </p>
            <p>
              <span className="font-semibold">Company</span> :{" "}
              {user?.company?.name}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserListCard;
