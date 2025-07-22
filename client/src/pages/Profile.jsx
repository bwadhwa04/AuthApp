import { useSelector } from "react-redux";
import { useRef } from "react";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4" >
        <input type="file" ref={fileRef} hidden={true} accept="image/*"/>
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="mt-2 h-24 w-24 rounded-full self-center object-cover cursor-pointer"
          onClick={()=>fileRef.current.click()}
        />
        <input
          type="text"
          defaultValue={currentUser.username} 
          id="username"
          placeholder="Username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          defaultValue={currentUser.email}
          id="email"
          placeholder="Email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase cursor-pointer hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between my-4"><span className="text-red-700 cursor-pointer">Delete Account!</span>
      <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
