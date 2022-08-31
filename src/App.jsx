import Form from "./components/Form"
import Header from "./components/Header"
import ListTask from "./components/ListTask"

function App() {
 

  return (
    <div className="container mx-auto mt-20">
      <Header/>
        <div className="mt-12 flex">
          <Form/>
          <ListTask/>
        </div>
      
    </div>
  )
}

export default App
