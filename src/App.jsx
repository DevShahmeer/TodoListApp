import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import store from './store';
import './App.css'



const App = () => {
  return (
    <div className="app-container">
      <div className="app-content">
        <Provider store={store}>
          <h2>TodoList</h2>
          <AddTodoForm/>
          <TodoList/>
        </Provider>
      </div>  
    </div>
  );
};

export default App;