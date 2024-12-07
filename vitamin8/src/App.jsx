import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container mt-5">
      <div className="bg-white p-5 rounded-4 shadow">
        <h1 className="text-center mb-4 fw-bold">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
