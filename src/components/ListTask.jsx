import { useEffect } from "react";
import Task from "./Task";

const ListTask = ({ task, settarea, deletetask }) => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      {task && task.length ? (
        <>
          <h2 className="font-black text-3xl text-center mb-10">
            Pending Task list 🤞
          </h2>

          {task.map((tarea) => {
            return (
              <Task
                key={tarea.id}
                tarea={tarea}
                settarea={settarea}
                deletetask={deletetask}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center mb-10">
            Without Pending Task 👌
          </h2>
        </>
      )}
    </div>
  );
};

export default ListTask;
