import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./context/TodoContex";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const[ todos,settodos]=useState([])
  const addTodo=(todo)=>{
    settodos(prev=>[{...todo},...prev])
  }
  const updateTodo=(todo,id)=>{
    settodos(prev=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))}
    //   if(prevTodo.id===id){
    //     return todo
    //   }else{
    //     return prevTodo
    //   }
    // }))
  
  const toggleTodo=(id)=>{
    settodos(prev=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,complete:!prevTodo.complete}:prevTodo)))}
  
  const deleteTodo=(id)=>{
    settodos(prev=>prev.filter((todo)=>todo.id!==id))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos,addTodo,toggleTodo,updateTodo,deleteTodo}} >
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm/>
          {/* Todo form goes here */}</div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo)=>(
          <div  key={todo.id} className="w-full" ><TodoItem todo={todo}/></div>))}

        </div>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App
