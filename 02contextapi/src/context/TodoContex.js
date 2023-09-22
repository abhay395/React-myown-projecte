import React, { createContext, useContext } from "react";

const TodoContext=createContext({
    todos:[{
        todoText:'todo',
        complete:false,
        id:1
    }],// todo ka matlab hai 1 todo objecte
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    toggleTodo:(id,todo)=>{},
    deleteTodo:(id)=>{}
})
export default TodoContext
export const TodoProvider=TodoContext.Provider
export const useTodo=()=>{
    return useContext(TodoContext)
}