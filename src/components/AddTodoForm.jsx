import React, { useRef, useState } from 'react'
import { addTodo } from '../features/todosSlices'
import { useDispatch, useSelector } from 'react-redux'

const AddTodoForm = () => {
  const [ newTask, setNewTask ] = useState('');
  const [error, setError] = useState('')
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTask.trim() === '') {
      setError('Todo text cannot be empty.')
      inputRef.current.focus();
    } else if(todos.some((todo)=> todo.text === newTask)) {
      setError('Todo text cannot be empty.');
      setNewTask('');
      inputRef.current.focus();
    }
    else {
      dispatch(addTodo({id: Date.now(), text: newTask, complete: false}));
      setNewTask('');
      setError('')
    }
  }
  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter your todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodoForm