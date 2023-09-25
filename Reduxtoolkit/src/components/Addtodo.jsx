import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addTodo, updateTodo} from "../feature/todo/todoSlice";

function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // updating
  const todos = useSelector((state) => state.todos);
  const updatingTodoid=useSelector((state)=>state.updatetodoid)
  const updatingTodo=todos.filter((todo)=>todo.id===updatingTodoid)
  const updatingtext=updatingTodo.length ? updatingTodo[0].text:''

  const updatingmode=updatingTodo.length ? updatingTodo[0].updateTodoMode:false
  const updateTododisplay=()=>{
   updatingmode?setInput(updatingtext):setInput('')
  }
  const updatetoodoHandler=()=>{
    dispatch(updateTodo([updatingTodoid,input]))
  }
  // const buttonHandler=(e)=>{
  //   e.preventDefault();
  //   updatingmode?updatetoodoHandler():addTodoHandler()
    
  // }
  const addTodoHandler = () => {
    // e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  useEffect(()=>{
    updateTododisplay()
  },[updatingmode])
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      updatingmode?updatetoodoHandler():addTodoHandler()
    }} className="space-x-3 mt-12">
      <input
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-out "
        type="text"
        placeholder="Enter a Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updatingmode?'Update':'Add'}
      </button>
    </form>
  );
}

export default Addtodo;
