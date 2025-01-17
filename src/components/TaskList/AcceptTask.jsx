/* eslint-disable react/prop-types */
const AcceptTask = ({ data }) => {
  // console.log();

  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-gray-800 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-cyan-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 px-1 py-2 text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 px-1 py-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
