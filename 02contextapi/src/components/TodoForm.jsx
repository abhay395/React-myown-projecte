import React, { useState } from "react";
import { useTodo } from "../context/TodoContex";
function TodoForm() {
    const [todoT,settodot]=useState('')
    const {addTodo}=useTodo()
    const addtext=()=>{
      if(!todoT) return;
    addTodo({id:Date.now(),complete:false,todoText:todoT})
}

  return (
    <form className="flex" onSubmit={addtext}>
      <input
        type="text"
        value={todoT}
        onChange={(e)=>{settodot(e.target.value)}}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;