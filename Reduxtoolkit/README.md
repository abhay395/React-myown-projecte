# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# steps for use Reduxtoolkite
## step 1 make store
make app folder and make file Store.js
import configureStore in this file and export this store  
store=configureStore({}) 
## step 2 make Slice
make feature folder and make file todoSlice.js and import createSlice
and make initialState =it wilbe {} and [] arry any one you choes
and then make slice(it's a big part of reducer and reducer is functinality) so first you make slice and it's do like this

`````
 todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={id:nanoid(), text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{todo.id!==action.payload})
        }
    }
})
``````
when we make a todoslice  we alwes make a name and give it a name make a reducer we maxime time use {} in reducer and alwas throw function in this reducer and in this reducer function  call indevisval reducer 