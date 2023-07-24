import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todosSlices";


const store = configureStore({
    reducer: {
        todoList: todosReducer
    }
})

export default store;