import { useState, useEffect } from "react";
import AlertError from "./AlertError";

const Form = ({ task, settasks, tarea, settarea }) => {
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");

  const [error, seterror] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      settitle(tarea.title);
      setdate(tarea.date);
      setdescription(tarea.description);
    }
  }, [tarea]);
  //Función para generar un id para cada tarea
  const generateId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };
  //validación formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([title, date, description].includes("")) {
      seterror(true);
      return;
    }

    seterror(false);

    //objeto de tareas

    const objetoTasks = {
      title,
      date,
      description      
    };

    if(tarea.id){
      //editar registro
      objetoTasks.id = tarea.id
      
      const taskUpdated = task.map(tareaState=> tareaState.id === tarea.id ? objetoTasks : tareaState)

      settasks(taskUpdated)
      settarea({})
    }else{
      //nuevo registro
      objetoTasks.id = generateId();
      settasks([...task, objetoTasks]);
    }

    

    //Limpiar el formulario
    settitle("");
    setdate("");
    setdescription("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">Create Task 😃</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10"
      >
        {error && <AlertError mensaje="You have fields empty!! 😒 " />}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-orange-600 uppercase font-bold"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="task title"
            className="border- w-full p-2 mt-2 rounded-lg placeholder:bg-gray-200"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-orange-600 uppercase font-bold"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            className="border- w-full p-2 mt-2 rounded-lg placeholder:bg-gray-200"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block   -orange-600 uppercase font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            type="text"
            placeholder="task description"
            className="border- w-full p-2 mt-2 rounded-lg placeholder:bg-gray-200"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        
        {!tarea.id ? (
          <input
          type="submit"
          value="Done"
          className="bg-green-600  w-full p-3 text-white uppercase font-bold rounded-full hover:bg-green-800 transition-colors cursor-pointer"
        />
        ) : (<input
          type="submit"
          value="Update task"
          className="bg-pink-400  w-full p-3 text-white uppercase font-bold rounded-full hover:bg-pink-800 transition-colors cursor-pointer"
        />)}
      </form>
    </div>
  );
};

export default Form;
