import { createSlice } from "@reduxjs/toolkit";


export const todosRedcers=createSlice({
   name:'todos',
   initialState:{
    lists:[]
   },
   reducers:{
    addTodo:(state,action)=>{
     state.lists.push(action.payload);
    },
    removeTodo:(state,action)=>{
      state.lists.splice(action.payload,1);
    }
   }
})
export const {addTodo,removeTodo} = todosRedcers.actions;

export default todosRedcers.reducer;

