import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo ,toggleTodomode } from "../feature/todo/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => {
          if (todo.text === "") return;
          else
            return (
              <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
              >
                <div className="text-white">{todo.text}</div>
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"  id={todo.id}
                  onClick={()=>{
                    dispatch(toggleTodomode(todo.id))
                  }}
                >
                  ✏️
                </button>
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  ❌
                </button>
              </li>
            );
        })}
      </ul>
    </>
  );
}

export default Todos;