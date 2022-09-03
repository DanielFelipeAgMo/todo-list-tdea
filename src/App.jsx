import { useState, useEffect} from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListTask from "./components/ListTask"

function App() {

  const [task,settasks] = useState([]) 
  const [tarea, settarea] = useState({})
 //Implementando la persistencia de los datos
  useEffect(()=>{
    const getTaskLocalStorage = ()=>{
      const tasklocalStorage = JSON.parse(localStorage.getItem('task')) ?? []
      settasks(tasklocalStorage)
    }

    getTaskLocalStorage()
  }, [])

  //Implementando el localstorage para almacenar
  useEffect(() => {  
    localStorage.setItem('task', JSON.stringify(task))
  }, [task])
  

  //borrar tarea
  const deletetask = (id)=>{
    const actualizartarea = task.filter(tarea=> tarea.id !== id)
    settasks(actualizartarea)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
        <div className="mt-12 md:flex">
          <Form
          tarea={tarea}
          task={task}
          settasks={settasks}
          settarea={settarea} 
          />
          <ListTask
          task={task}
          settarea={settarea}
          deletetask={deletetask}
          />
        </div>
        
      
    </div>
  )
}

export default App
