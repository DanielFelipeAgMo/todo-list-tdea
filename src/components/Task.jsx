

const Task = ({tarea}) => {

  //destructuramos tarea para que sus props pasen mas elegantes
  const {title,date,description}=tarea

  return (
    <div className="bg-white shadow-lg px-5 py-10 rounded-lg mt-5">
        <p className="font-bold mb-3 text-gray-500 uppercase">Title: {' '} 
        <span className="font-normal normal-case" >{title}</span></p>
        <p className="font-bold mb-3 text-gray-500 uppercase">Date: {' '} 
        <span className="font-normal normal-case" >{date}</span></p>
        <p className="font-bold mb-3 text-gray-500 uppercase">Description: {' '} 
        <span className="font-normal normal-case" >{description}</span></p>
    </div>
  )
}

export default Task