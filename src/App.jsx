import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListTask from "./components/ListTask"

function App() {

  const [task,settasks] = useState([]) 
  const [tarea, settarea] = useState({})

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
          />
        </div>
        
      
    </div>
  )
}

export default App
