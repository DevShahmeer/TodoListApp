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
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
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
