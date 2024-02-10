/* eslint-disable react/prop-types */
import { useState } from "react";
import ImageUploading from "react-images-uploading";

const AddUserForm = () => {
  const [avatarImg, setAvatarImg] = useState([]);
  return (
    <section className=" md:w-1/2 mx-auto pt-20 mb-10 text-white min-h-screen ">
      <div className="bg-gray-700 rounded-2xl">
        <h2 className="text-center text-2xl font-bold pt-6">Add User</h2>
        <form className="mt-4 px-2 w-[95%] md:w-1/2 mx-auto flex flex-col gap-4 text-white">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-white">Avatar</p>
            <ImageUploading
              value={avatarImg}
              onChange={(image) => setAvatarImg(image)}
              dataURLKey="data_url"
            >
              {({ onImageUpload, onImageRemove, dragProps }) => (
                <div
                  className="border rounded border-dashed p-4 w-max sm:flex gap-6"
                  {...dragProps}
                >
                  <div className="flex items-center gap-2">
                    <span
                      onClick={onImageUpload}
                      className="px-4 py-2 rounded-xl bg-gray-900 cursor-pointer text-sm"
                    >
                      Choose Avatar
                    </span>

                    <p className="text-neutral-content">or Drop Down</p>
                  </div>

                  <div className={`${avatarImg?.length > 0 && "mt-4"} `}>
                    {avatarImg?.map((image, index) => (
                      <div key={index} className="image-item relative">
                        <img src={image["data_url"]} alt="" className="w-24" />
                        <div
                          onClick={() => onImageRemove(index)}
                          className="w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer"
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>

          <div className="grid grid-cols-2 gap-4 text-white">
            <div className="flex flex-col gap-2">
              <p>First Name</p>
              <input className="rounded" type="text" name="firstName" />
            </div>

            <div className="flex flex-col gap-2">
              <p>Last Name</p>
              <input className="rounded" type="text" name="lastName" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Email</p>
            <input className="rounded" type="email" name="email" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p>City</p>
              <input className="rounded" type="text" name="city" />
            </div>

            <div className="flex flex-col gap-2">
              <p>State</p>
              <input className="rounded" type="text" name="state" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Company Name</p>
            <input className="rounded" type="text" name="company" />
          </div>

          <div>
            <button className="rounded bg-gray-900 mt-4 px-4 py-2 text-white transition-all hover:opacity-80 mb-4">
              Add User
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddUserForm;
