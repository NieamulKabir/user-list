/* eslint-disable react/prop-types */
import { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ firstName: "", lastName: "", email: "", company: "" });
  };

  return (
    <div className=" w-1/2 mx-auto my-16 text-white min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="mx-auto  bg-gray-700 px-16 py-10 rounded-md"
      >
        <h2 className="text-center text-2xl font-bold text-white mb-6  lg:text-[28px]">
          Add Users
        </h2>

        <div className="space-y-6 lg:space-y-5">
          <div className="space-y-1 lg:space-y-3">
            <label htmlFor="first name">First Name</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2"
              type="text"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1 lg:space-y-3">
            <label htmlFor="last name">Last Name</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2"
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1 lg:space-y-3">
            <label htmlFor="email">Email</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2"
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1 lg:space-y-3">
            <label htmlFor="Company name"> Company name</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2"
              type="text"
              id="company"
              name="company"
              value={user.company}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded bg-gray-900 mt-4 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          Submit
        </button>
      </form>
    </div>
    // <form className="mt-16" onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="firstName">First Name:</label>
    //     <input
    //       type="text"
    //       id="firstName"
    //       name="firstName"
    //       value={user.firstName}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="lastName">Last Name:</label>
    //     <input
    //       type="text"
    //       id="lastName"
    //       name="lastName"
    //       value={user.lastName}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={user.email}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="company">Company:</label>
    //     <input
    //       type="text"
    //       id="company"
    //       name="company"
    //       value={user.company}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <button type="submit">Add User</button>
    // </form>
  );
};

export default AddUserForm;
