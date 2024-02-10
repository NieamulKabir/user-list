/* eslint-disable react/prop-types */


const UserDetailCard = ({userDetails}) => {
    const { image, firstName, lastName, email, address, company } = userDetails;
    return (
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
    );
};

export default UserDetailCard;