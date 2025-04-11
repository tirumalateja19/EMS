import React from "react";

const Header = ({ data, onLogout }) => {
  const { name } = data;

  return (
    <div className="flex items-center justify-between ">
      <div>
        <h1 className="text-lg font-bold text-white">
          Hello 👋🏻
          <br />
          <span className="font-semibold text-2xl">{name}</span>
        </h1>
      </div>
      <div>
        <button
          className="bg-red-700 px-4 py-2 rounded-lg shadow-lg font-bold text-white cursor-pointer"
          onClick={onLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
