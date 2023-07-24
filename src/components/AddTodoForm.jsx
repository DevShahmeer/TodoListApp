import React, { useState } from 'react'
import { addTodo } from '../features/todosSlices'
import { useDispatch } from 'react-redux'

const AddTodoForm = () => {
  const [ newTask, setNewTask ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTask.trim() !== '') {
      dispatch(addTodo({id: Date.now(), newTask, complete: false}))
      setNewTask('');
    }
  }
  return (
    <div>
      <input type="text" 
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  )
}

export default AddTodoForm