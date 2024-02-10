/* eslint-disable react/prop-types */

const UserDetailCard = ({ userDetails }) => {
  const { image, firstName, lastName, email, address, company } = userDetails;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl w-full md:w-1/2  mx-auto">
      <div className="avatar mx-auto mt-4">
        <div className="w-28 ring ring-gray-600 ring-offset-gray-100 ring-offset-2 rounded-full">
          <img src={image} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>

        <p className="text-md font-semibold">
          Email: <span className="text-green-500">{email}</span>
        </p>
        <p>
          <span className="font-semibold">Address</span>: {address?.address}{" "}
          <span className="font-semibold">City</span>: {address?.city}
        </p>
        <p>
          <span className="font-semibold">Company</span> : {company?.name}{" "}
        </p>
      </div>
    </div>
  );
};

export default UserDetailCard;
