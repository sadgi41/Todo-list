import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

   useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
     saveToLS()
  }
  const handleEdit = (e, id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
     saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    
    let id = e.target.name;
   
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container bg-purple-400 text-white mx-auto my-4 p-3 border rounded-lg w-1/2 ">
        <div>
          <h1 className='font-bold'>Add a Todo</h1>
          <input onChange={handleChange} value={todo} className='text-black w-1/2' type="text" />
          <button onClick={handleAdd} className='mx-3 border rounded-md p-1 bg-purple-600 hover:bg-purple-800 cursor-pointer'>Add</button>
        </div>
        <h1 className='font-bold py-4'>Your Todo</h1>
        <div className="todos">
          {todos.length === 0 && <div> No Todos to display </div>}
          {todos.map(item => {

            return <div key={item.id} className="todo flex justify-between my-3">
              <div className='flex gap-5'>
              <input onChange={handleCheckbox} name={item.id} type="checkbox" value={item.isCompleted} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={(e)=> {handleEdit(e, item.id)}} className='mx-3 border rounded-md p-1 bg-purple-600 hover:bg-purple-800 cursor-pointer'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='mx-3 border rounded-md p-1 bg-purple-600 hover:bg-purple-800 cursor-pointer'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
