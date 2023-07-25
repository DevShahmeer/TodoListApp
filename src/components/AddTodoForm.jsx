import React, { useState } from 'react'
import { addTodo } from '../features/todosSlices'
import { useDispatch } from 'react-redux'

const AddTodoForm = () => {
  const [ newTask, setNewTask ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTask.trim() !== '') {
      dispatch(addTodo({id: Date.now(), text: newTask, complete: false}))
      setNewTask('');
    }
  }
  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
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