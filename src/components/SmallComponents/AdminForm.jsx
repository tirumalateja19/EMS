import React from "react";

const AdminForm = () => {
  return (
    <div className="bg-[#1c1c1c] text-white p-3 mt-4 rounded-lg">
      <form className="flex">
        <div className="flex flex-col w-[50%] items-start justify-center ml-5">
          <h3 className="font-medium text-lg mb-1">Task Title</h3>
          <input
            type="text"
            placeholder="Make a UI design"
            className="outline-none border-2 border-white rounded-sm p-2 w-9/12 mb-1"
          />
          <h3 className="font-medium text-lg mb-1">Date</h3>
          <input
            type="date"
            className="outline-none border-2 border-white rounded-sm p-2 w-9/12 mb-1"
          />
          <h3 className="font-medium text-lg mb-1">Assign to</h3>
          <input
            type="text"
            placeholder="Employee Name"
            className="outline-none border-2 border-white rounded-sm p-2 w-9/12 mb-1"
          />
          <h3 className="font-medium text-lg mb-1">Category</h3>
          <input
            type="text"
            placeholder="design,dev,etc"
            className="outline-none border-2 border-white rounded-sm p-2 w-9/12 mb-1"
          />
        </div>
        <div className="flex flex-col w-[50%] items-center justify-center">
          <div>
            <h3 className="text-xl mb-3">Description</h3>
            <textarea
              name="desc"
              id="desc"
              rows={8}
              cols={64}
              className="outline-none border-2 border-white  p-2"
            ></textarea>
          </div>
          <div className="mt-5">
            <button className="bg-emerald-400 px-53 rounded-sm py-2 cursor-pointer ">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
