import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserListCard = ({ users }) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 py-10">
      {users?.map((user) => (
        <div key={user.id} className="card card-compact  bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={user.image} />
            </div>
          </div>
          <div className="card-body">
            <NavLink to={`/userDetails/${user?.id}`}>
              <h2 className="card-title">
                {user.firstName} {user.lastName}
              </h2>
            </NavLink>
          
            <p>Email : {user.email}</p>
            <p>
              address : {user?.address?.address} city:{user.address?.city}
            </p>
            <p>company : {user?.company?.name} </p>
        
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserListCard;
