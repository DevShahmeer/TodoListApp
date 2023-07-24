import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todosSlices";


const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})


const App = () => {
  return (
    <div>
    <Provider store={store}>
      <h2>TodoList</h2>
      <TodoList/>
      <AddTodoForm/>
    </Provider>
    </div>
  );
};

export default App;