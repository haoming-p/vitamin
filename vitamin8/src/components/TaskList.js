import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: taskId
    });
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="d-flex justify-content-between align-items-center p-3 mb-2 bg-white border rounded-3">
          {task.text}
          <button
            onClick={() => handleDelete(task.id)}
            className="btn btn-danger rounded-3"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;