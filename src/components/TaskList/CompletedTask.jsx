import React from "react";

const CompletedTask = ({task}) => {
  const { category, date, description, title } = task;
  return (
    <div className="shrink-0 w-[27%] h-[23rem] rounded-lg bg-amber-300 ">
      <div className="flex justify-between p-7 items-center">
        <h2 className="bg-red-600 text-sm text-white font-bold px-3 py-1 rounded-lg">
          {category}
        </h2>
        <h2 className="text-sm font-semibold">{date}</h2>
      </div>
      <h1 className=" font-serif font-semibold text-center text-3xl">
        {title}
      </h1>
      <p className="text-center mt-3">{description}</p>
      <div className="flex justify-center items-center mt-8">
        <button className="px-4 py-2 bg-green-500 cursor-pointer rounded-lg font-serif font-bold ">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompletedTask;
