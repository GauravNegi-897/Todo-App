import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [todo , setTodo] = useState("");

  const [todos , setTodos] = useState([]);

  const handleChange = (e) =>{
      setTodo(e.target.value);
  }

  const handleAdd = () => {
    setTodos([...todos ,  {todo, iscompleted:false}])
    setTodo("");
  }


  return (
    <>

    <Navbar/>

    <div className="max-w-[60vw] min-h-[70vh] container mx-auto my-5 rounded-xl p-5 bg-violet-100">
      <div className="addtodo my-5">
        <h2 className="text-lg font-bold">Add to do</h2>
        <input type="text" value={todo} onChange={handleChange}  className="w-1/2"/>
        <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-3 py-0.5 text-white rounded-md mx-6">Add</button>
      </div>
      <h2 className="text-lg font-bold">Your Todos</h2>

      <div className="todos">
      {
        todos.map(item => {
        return <div className="todo flex">
          <div className="text">{item.todo}</div>

          <button className="bg-violet-800 hover:bg-violet-950 p-3 py-0.5 text-white rounded-md mx-1">Edit</button>
          <button className="bg-violet-800 hover:bg-violet-950 p-3 py-0.5 text-white rounded-md mx-1">Delete</button>
          
        </div>
      })}
      </div>
    </div>

     
    </>
  );
}

export default App;
