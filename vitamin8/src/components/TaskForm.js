import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TaskForm() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: Date.now(),
          text: taskText
        }
      });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="d-flex">
        <input
          type="text"
          className="form-control form-control-lg me-2 rounded-3"
          placeholder="Enter a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary px-4 rounded-3">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;