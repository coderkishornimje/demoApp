import { configureStore } from "@reduxjs/toolkit";
import  todosRedcers  from "./Reducers";


const store= configureStore({
    reducer:{
       todos:todosRedcers  
    }
})

export default store;