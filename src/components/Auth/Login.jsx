import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/ContextAPI";

const Login = ({ LoginUser }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log("email : ", user);
    // console.log("Password : ", password);
    LoginUser(user, password);
    setUser("");
    setPassword("");
  };
  
  return (
    <div className="w-full h-screen flex  items-center justify-center">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
      >
        <div className="flex flex-col gap-10 border-2 border-emerald-700 p-15 rounded-2xl">
          <input
            required
            value={user}
            type="email"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            placeholder="Enter your Mail"
            className="outline-none bg-transparent border-2 border-emerald-300 text-white px-6 py-3 rounded-full shadow-xl "
          ></input>
          <input
            required
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password"
            className="outline-none bg-transparent border-2 border-emerald-300 text-white px-6 py-3  rounded-full shadow-xl"
          ></input>
          <button
            type="submit"
            className="mt-1.5 px-6 py-2 font-semibold bg-emerald-300 shadow-sm shadow-gray-100 rounded-lg cursor-pointer hover:bg-emerald-500"
          >
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
