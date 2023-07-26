// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../features/todosSlices';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}  key={todo.id}>
          <span
            
            onClick={() => handleToggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
