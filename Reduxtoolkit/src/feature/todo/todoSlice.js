import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    updatetodoid:0,
    todos:[{
       text:'',
       id:1 ,
       updateTodoMode:false
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={id:nanoid(), text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            
            
        },
        toggleTodomode:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.updateTodoMode=!todo.updateTodoMode
                }
                state.updatetodoid=action.payload
            })
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id===action.payload[0]){
                    todo.text=action.payload[1]
                    todo.updateTodoMode=!todo.updateTodoMode
                }
            })
        }
    }
})
 export const {addTodo,removeTodo,toggleTodomode,updateTodo}=todoSlice.actions
 export default todoSlice.reducer