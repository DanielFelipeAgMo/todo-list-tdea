import { useState } from "react"

const Form = () => {

    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const [description, setdescription] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert('Sending my task 😎')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center mb-10">Create Task</h2>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
                <label htmlFor="title" className="block text-orange-600 uppercase font-bold">Title</label>
                <input id="title" type="text" placeholder="task title" className="border- w-full p-2 mt-2 rounded-lg placeholder:bg-gray-200" value={title} onChange={(e)=> settitle(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="date" className="block text-orange-600 uppercase font-bold">Date</label>
                <input id="date" type="date" className="border- w-full p-2 mt-2 rounded-lg placeholder:bg-gray-200" value={date} onChange={(e)=> setdate(e.target.value)}/>
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block text-orange-600 uppercase font-bold">Description</label>
                <textarea id="description" type="text" placeholder="task description" className="border- w-full p-2 mt-2 rounded-lg placeholder:bg-gray-200" value={description} onChange={(e)=> setdescription(e.target.value)}/>
            </div>
            <input type="submit" value="Done" className="bg-green-600  w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-green-800 transition-colors cursor-pointer" />
        </form>
    </div>
  )
}

export default Form