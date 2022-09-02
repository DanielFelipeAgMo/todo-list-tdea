import Task from "./Task"


const ListTask = ({task}) => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
        <h2 className="font-black text-3xl text-center mb-10">Pending Task</h2>

        {task.map((tarea,index )=>{
          return(
            <Task
            key={index}
            tarea={tarea}
            />
          )
        })}

        
    </div>
  )
}

export default ListTask