import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between ">
      <div>
        <h1 className="text-xl font-bold text-white">
          Hello 👋🏻
          <br />
          <span className="font-semibold text-3xl">Tirumala Teja</span>
        </h1>
      </div>
      <div>
        <button className="bg-red-700 px-5 py-3 rounded-lg shadow-lg font-bold text-white cursor-pointer">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
