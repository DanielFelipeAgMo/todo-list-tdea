const Task = ({ tarea, settarea, deletetask }) => {
  //destructuramos tarea para que sus props pasen mas
  const { title, date, description, id } = tarea;

  return (
    <div className="bg-white shadow-lg px-5 py-10 rounded-lg mt-5">
      <p className="font-bold mb-3 text-gray-500 uppercase">
        Title: <span className="font-normal normal-case">{title}</span>
      </p>
      <p className="font-bold mb-3 text-gray-500 uppercase">
        Date: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-500 uppercase">
        Description:{" "}
        <span className="font-normal normal-case">{description}</span>
      </p>
      <div className="flex justify-between">
        <button
          className="bg-green-500 hover:bg-green-700 mt-4 py-2 px-10 rounded-full text-white font-bold"
          type="button"
          onClick={() => settarea(tarea)}
        >
          Update
        </button>
        <button
          className="bg-red-300 hover:bg-red-700 mt-4 py-2 px-10 rounded-full text-white font-bold"
          type="button"
          onClick={() => deletetask(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
