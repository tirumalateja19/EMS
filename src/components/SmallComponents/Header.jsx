import React from "react";

const Header = (props) => {
  const { data } = props;
  const { name } = data;

  return (
    <div className="flex items-center justify-between ">
      <div>
        <h1 className="text-xl font-bold text-white">
          Hello 👋🏻
          <br />
          <span className="font-semibold text-3xl">{name}</span>
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
